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
    'bg-brand-bg/95',
    'dark:bg-dark-bg/95',
    'backdrop-blur-sm',
    'shadow-md',
  ],

  theme: {
    extend: {
      colors: {
        'background': '#F8F5F2', // Fondo crema suave
        'foreground': '#2E2E2E', // Texto principal gris oscuro
        'primary': '#C05A3A',
        'secondary': '#707954',
        // --- CAMBIO IMPORTANTE ---
        // Definimos los colores base
        'brand-bg': '#F8F5F2', // Fondo claro
        'brand-fg': '#2E2E2E', // Texto claro
        'dark-bg': '#1E2228',  // Fondo oscuro
        'dark-fg': '#EFEFEF',  // Texto oscuro
      }
    },
  },
  plugins: [],
  darkMode: 'class',
}