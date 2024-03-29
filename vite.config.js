import { defineConfig } from 'vite'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'

import path from 'path'
export default defineConfig({
  plugins: [
    ViteImageOptimizer({
      jpg: {
        quality: 80,
        progressive: true,
        optimizeSize: true,
      },
      png: {
        quality: 80,
        progressive: true,
        optimizeSize: true,
      },
      webp: {
        lossless: true,
      },
    }),
  ],
  base: './',
  build: {
    css: {
      minify: true, // Enable CSS minification
      include: [
        'animate.css',
        'flex-slider.css',
        'owl.css',
        'templatemo-villa-agency.css',
      ],
    },
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
        js: path.resolve(__dirname, 'assets/js/custom.js'),
      },
    },
  },
})
