import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
    plugins: [react()],
    build: {
        lib: {
            entry: resolve(__dirname, 'src/components/feed_search/index.tsx'),
            name: 'FeedSearch',
            fileName: 'feed_search',
            formats: ['es'],
        },
        rollupOptions: {
            external: ['react', 'react-dom'],
            output: {
                globals: {
                    react: 'React',
                    'react-dom': 'ReactDOM'
                },
                paths: {
                    // Specify the exact CDN paths for external dependencies
                    'react': 'https://cdn.jsdelivr.net/npm/react@18.2.0/+esm',
                    'react-dom': 'https://cdn.jsdelivr.net/npm/react-dom@18.2.0/+esm'
                }
            }
        },
        minify: false,
        sourcemap: true
    }
})
