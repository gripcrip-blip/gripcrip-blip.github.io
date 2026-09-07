import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Relative base so assets work on GitHub Pages, Vercel, Netlify and Cloudflare Pages.
export default defineConfig({
  plugins: [react()],
  base: './',
})
