import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    host: '0.0.0.0', // Listen on all network interfaces
    proxy: {
      '/api': 'http://localhost:8080'
    }
  },
  preview: {
    port: 8080
  }
})
