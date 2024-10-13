import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import * as path from 'path'; // Ensure the 'path' module is properly imported

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: '@', 
        replacement: path.resolve(__dirname, 'src'), // Correct alias replacement for '@'
      },
    ],
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        modifyVars: {
          '@primary-color': '#000000', // Black
          '@link-color': '#FFD700', // Yellow
          '@border-radius-base': '4px',
          '@font-size-base': '16px',
          '@heading-color': '#000000',
          '@text-color': '#000000',
          '@layout-header-background': '#000000',
        },
      },
    },
  },
});
