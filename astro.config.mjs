import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://franforge.es',
  base: '/',
  redirects: {
    '/en/home/html': '/en/home/',
    '/es/home/html': '/es/home/',
    '/en/projects/all.html': '/en/projects/all/',
    '/es/projects/all.html': '/es/projects/all/'
  }
});