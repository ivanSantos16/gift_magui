import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/gift_magui/',
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      output: {
        // Merge everything into one JS bundle (no code-splitting)
        inlineDynamicImports: true,
        // Stable file names — no content hashes
        entryFileNames: 'assets/app.js',
        assetFileNames: 'assets/app[extname]', // → app.css, app.woff2, etc.
      },
    },
  },
})

