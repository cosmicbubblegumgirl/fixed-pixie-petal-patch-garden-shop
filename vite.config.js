import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/fixed-pixie-petal-patch-garden-shop/',
  server: {
    port: 5501,
  },
});
