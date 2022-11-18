import { defineConfig } from 'vite'
import path from 'path'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath } from 'url'


export default defineConfig({
  root: path.resolve(__dirname, 'src', 'server'),
  plugins: [vue()],
  resolve: {
    alias: {
      '~': fileURLToPath(new URL('./lib', import.meta.url)),
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    port: 8000
  },
  build: {
    outDir: path.resolve(__dirname, 'dist'),
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'src', 'server', 'index.html')
      }
    }
  }
})
