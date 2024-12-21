import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
    plugins: [react()],
    build: {
        rollupOptions: {
            external: ['react', 'react-dom'],
            input: {
                feed_search: resolve(__dirname, 'src/components/feed_search/index.tsx'),
            },
            output: {
                dir: 'dist',
                format: 'es',
                entryFileNames: '[name].mjs',
                paths: {
                    react: 'https://cdn.jsdelivr.net/npm/react@18.2.0/+esm',
                    'react-dom': 'https://cdn.jsdelivr.net/npm/react-dom@18.2.0/+esm'
                }
            }
        }
    }
})
