import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
const px2rem = require('postcss-px2rem')
// 配置基本⼤⼩
const postcss = px2rem({
  // 基准⼤⼩ baseSize，需要和rem.js中相同
  remUnit: 16,
})

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [vue()],
  css: {
    postcss: {
      plugins: [postcss],
    },
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      _c: resolve(__dirname, 'src/components'),
      // '/image': './src/assets/image',
      '/assets': './src/assets',
    },
  },
  server: {
    host: '0.0.0.0',
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
