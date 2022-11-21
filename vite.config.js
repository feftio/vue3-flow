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
    outDir: path.resolve(__dirname, 'build'),
    emptyOutDir: true,
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue'
        }
      }
      // input: {
      //   main: path.resolve(__dirname, 'src', 'server', 'index.html')
      // }
    },
    lib: {
      entry: path.resolve(__dirname, 'lib', 'index.js'),
      name: 'vue3-flow',
      fileName: (format) => `vue3-flow.${format}.js`
    }
  }
})
