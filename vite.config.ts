import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // El preview del harness asigna el puerto vía PORT.
  server: {
    port: Number(process.env.PORT) || 5173,
  },
  /* Multi-página: cada landing es su propia entrada HTML con su propio
     <head> estático (title, canonical, JSON-LD) — lo que una vista por
     hash nunca podría dar a los buscadores. */
  build: {
    rollupOptions: {
      input: {
        main: resolve(import.meta.dirname, 'index.html'),
        'seguro-de-salud': resolve(import.meta.dirname, 'seguro-de-salud/index.html'),
        'seguro-vehicular': resolve(import.meta.dirname, 'seguro-vehicular/index.html'),
        'seguro-de-vida': resolve(import.meta.dirname, 'seguro-de-vida/index.html'),
        'seguro-de-hogar': resolve(import.meta.dirname, 'seguro-de-hogar/index.html'),
      },
    },
  },
})
