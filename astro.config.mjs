import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://franforge.es',
  base: '/',
  trailingSlash: 'always',
  build: {
    format: 'directory'
  }
});