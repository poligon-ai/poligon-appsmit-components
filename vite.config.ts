import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
    plugins: [react()],
    build: {
        lib: {
            entry: 'src/TestComponent.tsx',
            name: 'TestComponent',
            formats: ['es'],
            fileName: 'test-component'
        },
        rollupOptions: {
            external: ['react', 'react-dom'],
            output: {
                paths: {
                    react: 'https://cdn.jsdelivr.net/npm/react@18.2.0/+esm',
                    'react-dom': 'https://cdn.jsdelivr.net/npm/react-dom@18.2.0/+esm'
                }
            }
        }
    }
})
