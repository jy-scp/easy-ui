import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

export default defineConfig({
  plugins: [tailwindcss(), react()],
  resolve: {
    alias: {
      '@easy/ui': path.resolve(__dirname, '../components/src'),
    },
  },
  // 🔥 明确 HMR 配置，确保实时更新
  server: {
    watch: {
      // 监听 components 包的变化
      include: ['src/**', '../components/src/**'],
    },
  },
})
