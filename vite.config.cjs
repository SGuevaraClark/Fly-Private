const { defineConfig } = require('vite')
const react = require('@vitejs/plugin-react')

// https://vitejs.dev/config/
module.exports = defineConfig({
  plugins: [react()],
  server: {
    hmr: {
      overlay: true
    }
  },
  css: {
    postcss: './postcss.config.cjs',
  },
  optimizeDeps: {
    include: ['react', 'react-dom']
  },
  build: {
    sourcemap: true,
    commonjsOptions: {
      transformMixedEsModules: true
    }
  }
})
