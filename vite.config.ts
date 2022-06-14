import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      _c: resolve(__dirname, 'src/components'),
      // '/image': './src/assets/image',
      '/assets': './src/assets',
    },
  },
  server: {
    // proxy: {
    //   '/api': {
    //     target: 'http://...............',
    //     changeOrigin: true,
    //     rewrite: (path) => {
    //       return path.replace(/^/api/, '')
    //     }
    //   }
    // }
  },
})
