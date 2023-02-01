import { defineConfig } from 'vite';

import { svelte } from '@sveltejs/vite-plugin-svelte';

// https://vitejs.dev/config/
export default defineConfig({
  resolve:{
    alias: [
      {
        find:/^@\/(.+)$/,
        replacement:"/src/$1",
      }
    ]
  },
  plugins: [svelte()],
})
