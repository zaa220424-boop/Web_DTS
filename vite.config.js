import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // ✅ ບໍ່ຕ້ອງມີ base ສຳລັບ Vercel
})