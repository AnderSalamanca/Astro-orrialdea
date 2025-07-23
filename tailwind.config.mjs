// tailwind.config.mjs (VERSIÓN DE PRUEBA)

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
  ],

  safelist: [
    'bg-primary',
    'dark:bg-slate-900/95',
    'backdrop-blur-sm',
    'shadow-md',
  ],

  theme: {
    extend: {
      colors: {
        'background': '#F8F5F2', // Fondo crema suave
        'foreground': '#2E2E2E', // Texto principal gris oscuro
        'primary': '#C05A3A',    // Acento principal terracota
        'secondary': '#707954',
      }
    },
  },
  plugins: [],
  darkMode: 'class',
}