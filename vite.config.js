import { defineConfig } from 'vite'
import path from 'path'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath } from 'url'

export default defineConfig(params => {
  return {
    root: path.resolve(__dirname, 'src', 'server'),
    plugins: [vue()],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
        'vue3-flow': fileURLToPath(new URL('./src/lib', import.meta.url))
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
        },
        input: (params.mode === 'production')
          ? null
          : {
              main: path.resolve(__dirname, 'src', 'server', 'index.html')
            }
      },
      lib: {
        entry: path.resolve(__dirname, 'src', 'lib', 'index.js'),
        name: 'vue3-flow',
        fileName: (format) => `vue3-flow.${format}.js`
      }
    }
  }
})
