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
                }
            }
        },
        // Don't minify for better debugging
        minify: false,
        // Generate sourcemaps
        sourcemap: true
    }
})
