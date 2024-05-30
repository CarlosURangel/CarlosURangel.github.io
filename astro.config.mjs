import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  buildOptions: {
    // Esta opción desactiva la visualización del estado de desarrollo
    showNodeModules: false
  }

});