import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, '/components/index.ts'),
      '@pages': path.resolve(__dirname, '/pages/index.ts'),
      '@models': path.resolve(__dirname, '/models/index.ts'),
      '@enums': path.resolve(__dirname, '/enums/index.ts'),
    }
  },
  plugins: [
    react(),
    tailwindcss(),
    tsconfigPaths(),
  ],
})
