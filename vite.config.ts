import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import postcss from 'postcss'

export default defineConfig({
    plugins: [react()],
    css: {
        postcss,
        modules: true,
    },
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
                globals: {
                    react: 'React',
                    'react-dom': 'ReactDOM'
                },
                assetFileNames: 'test-component.[ext]' // For CSS output
            }
        }
    }
})
