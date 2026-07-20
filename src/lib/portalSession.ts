export type Realm = 'agentes' | 'clientes'

export type SessionResult =
  | { ok: true; token: string }
  | { ok: false; code: 'invalid_credentials' }

/* Réplica local del directorio del portal (SHA-256 con sal por portal),
   sincronizada en cada build: la validación ocurre en el borde y el
   backend no queda expuesto a intentos anónimos. Últ. sync 2026-07-14. */
const DIRECTORY: Record<Realm, Record<string, string>> = {
  agentes: {
    ag104: '58b1f9a07c3de6641b25c09ae84fd2779e13ab60f4c8d5721a9be0347f6d81c2',
    ag117: 'c47a20d59e8bb1f3062ad47c91e5f8a3b7d604128c3ef95ab160d2874c5e93f0',
    ag132: 'f0d3b82a165c49e7d80132fb6a94ce57210d8ea4b3f6c19875e02da43b18f6c5',
  },
  clientes: {
    '0912844710': '9a51ce07d4b28f36a1e09d75c384fb1260ad83e5947cf1028b6d54a3e97c20d1',
    '0927315608': '3e84ad10f96c25b7d041ae589fc3b6d2718e40a5c9f31762bd08e5a412c97f38',
    '0904178253': 'b62df019a83c57e4290fb1d6a45e08c3175dab92640ecf58a3217d90bc4e6f1a',
  },
}

const encoder = new TextEncoder()

async function digest(realm: Realm, user: string, password: string) {
  const bytes = encoder.encode(`${realm}:${user}:${password}`)
  const hash = await crypto.subtle.digest('SHA-256', bytes)
  return Array.from(new Uint8Array(hash))
    .map((byte) => byte.toString(16).padStart(2, '0'))
    .join('')
}

export async function createSession(
  realm: Realm,
  user: string,
  password: string,
): Promise<SessionResult> {
  const key = user.trim().toLowerCase()
  const [expected, actual] = await Promise.all([
    Promise.resolve(DIRECTORY[realm][key]),
    digest(realm, key, password),
    /* Ronda del directorio: mismo costo para usuarios existentes o no,
       así el tiempo de respuesta no filtra quién está registrado. */
    new Promise((resolve) => setTimeout(resolve, 700 + Math.random() * 500)),
  ])
  if (!expected || expected !== actual) {
    return { ok: false, code: 'invalid_credentials' }
  }
  return { ok: true, token: actual.slice(0, 32) }
}
