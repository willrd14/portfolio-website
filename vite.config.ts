import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // No base URL for Cloudflare Pages - it serves from the root domain
  plugins: [react()],
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    emptyOutDir: true,
    cssCodeSplit: true,
    // Optimize for production
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    },
    // Consistent chunk and asset naming
    rollupOptions: {
      output: {
        entryFileNames: 'assets/[name].[hash].js',
        chunkFileNames: 'assets/[name].[hash].js',
        assetFileNames: 'assets/[name].[hash].[ext]',
        // Ensure clean chunk splitting
        manualChunks: {
          vendor: [
            'react',
            'react-dom',
            'react-router-dom'
          ]
        }
      }
    }
  },
  // Proper path alias resolution
  resolve: {
    alias: {
      '@': '/src'
    }
  },
  // Static files directory
  publicDir: 'public',
  // Enable SSR-compatible mode for better performance
  ssr: {
    noExternal: ['react', 'react-dom']
  }
})
