import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://spence3645.github.io',
  base: '/portfolio-site',
  output: 'static',
  integrations: [tailwind()],
});
