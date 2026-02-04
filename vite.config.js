import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  // Automatically use correct base path
  // For GitHub Pages: set VITE_BASE_PATH=/portfolio-website/
  // For root domain: set VITE_BASE_PATH=/
  // For other subdirectory: set VITE_BASE_PATH=/your-path/
  base: process.env.VITE_BASE_PATH || '/',
})