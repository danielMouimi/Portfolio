import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base: './' -> funciona en GitHub Pages, Netlify, Vercel o cualquier subcarpeta
export default defineConfig({
  base: './',
  plugins: [react()],
})
