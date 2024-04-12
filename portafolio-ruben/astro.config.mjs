import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  outDir: 'public',
  publicDir: 'static',
  base: 'https://portafolio-ruben.gitlab.io',
  integrations: [tailwind()]
});