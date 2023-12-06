import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { createRequire } from 'node:module'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
    resolve: {
        alias: {
            "@/": path.resolve(__dirname, './src'),
            "@/utils": path.resolve(__dirname, './src/utils'),
            "@/assets": path.resolve(__dirname, './src/assets'),
            "@/pages": path.resolve(__dirname, './src/pages'),
            "@/routes": path.resolve(__dirname, './src/routes'),
            "@/interfaces": path.resolve(__dirname, './src/interfaces'),
            "@/components": path.resolve(__dirname, './src/components'),
        }
    },
  plugins: [
    react(),
],
})
