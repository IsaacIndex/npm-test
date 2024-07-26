import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

console.log(__dirname)

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/MyComponent.jsx'),
      name: 'MyComponent',
      fileName: (format) => `my-component.${format}.js`,
    },
    rollupOptions: {
      external: ['react'],
      output: {
        globals: {
          react: 'React',
        },
      },
    },
  },
})
