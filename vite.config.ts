import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
    plugins: [react()],
    define: {
        // Add process.env
        'process.env': {},
        // Add global window object
        'global': {},
    },
    build: {
        lib: {
            entry: resolve(__dirname, 'src/index.ts'),
            name: 'Components',
            fileName: 'components_v2',
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
                    'react': 'https://cdn.jsdelivr.net/npm/react@18.2.0/+esm',
                    'react-dom': 'https://cdn.jsdelivr.net/npm/react-dom@18.2.0/+esm'
                }
            }
        },
        minify: false,
        sourcemap: true
    }
})
