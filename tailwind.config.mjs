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
        'background': '#F8F5F2',
        'background-subtle': '#FFFFFF',
        'dark-background': '#1E2228',
        'dark-background-subtle': '#2A3038',
        
        // Textos
        'foreground': '#2E2E2E',
        'foreground-muted': '#6B7280',
        'dark-foreground': '#EFEFEF',
        'dark-foreground-muted': '#9CA3AF',

        // Bordes
        'border': '#D1D5DB',
        'dark-border': '#374151',

        // Acento Primario
        'primary': '#C05A3A',
        'primary-foreground': '#FDFBF9',

        // Acento Secundario
        'secondary': '#707954',
        'secondary-foreground': '#FDFBF9',
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
  darkMode: 'class',
}