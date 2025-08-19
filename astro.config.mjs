// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

import preact from '@astrojs/preact';

import mdx from '@astrojs/mdx';

import { imageService } from "@unpic/astro/service";

// https://astro.build/config
export default defineConfig({

  integrations: [tailwind(),preact(), mdx()]

});