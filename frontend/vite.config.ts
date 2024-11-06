import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 5173,
    // proxy: {
    //   "/api": {
    //     target: "backend:8000",
    //     changeOrigin: true,
    //     rewrite: (path) => path.replace(/^\/api/, "/api")
    //   }
    // }
  }
})
