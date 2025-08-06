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
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            '--tw-prose-body': theme('colors.foreground'),
            '--tw-prose-headings': theme('colors.foreground'),
            '--tw-prose-lead': theme('colors.foreground-muted'),
            '--tw-prose-links': theme('colors.primary'), // Enlaces con tu color primario
            '--tw-prose-bold': theme('colors.foreground'),
            '--tw-prose-counters': theme('colors.secondary'), // Contadores de listas con tu color secundario
            '--tw-prose-bullets': theme('colors.secondary'), // Viñetas con tu color secundario
            '--tw-prose-hr': theme('colors.border'),
            '--tw-prose-quotes': theme('colors.foreground-muted'),
            '--tw-prose-quote-borders': theme('colors.border'),
            '--tw-prose-captions': theme('colors.foreground-muted'),
            '--tw-prose-code': theme('colors.primary'),
            '--tw-prose-pre-code': theme('colors.dark-foreground'),
            '--tw-prose-pre-bg': theme('colors.dark-background-subtle'),
            // --- COLORES INVERTIDOS (MODO OSCURO) ---
            '--tw-prose-invert-body': theme('colors.dark-foreground'),
            '--tw-prose-invert-headings': theme('colors.dark-foreground'),
            '--tw-prose-invert-lead': theme('colors.dark-foreground-muted'),
            '--tw-prose-invert-links': theme('colors.primary'), // Mantenemos el mismo color de enlace
            '--tw-prose-invert-bold': theme('colors.dark-foreground'),
            '--tw-prose-invert-counters': theme('colors.dark-foreground-muted'),
            '--tw-prose-invert-bullets': theme('colors.secondary'),
            '--tw-prose-invert-hr': theme('colors.dark-border'),
            '--tw-prose-invert-quotes': theme('colors.dark-foreground-muted'),
            '--tw-prose-invert-quote-borders': theme('colors.dark-border'),
            '--tw-prose-invert-captions': theme('colors.dark-foreground-muted'),
            '--tw-prose-invert-code': theme('colors.dark-foreground'),
            '--tw-prose-invert-pre-code': theme('colors.dark-foreground'),
            '--tw-prose-invert-pre-bg': theme('colors.dark-background'),
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
  darkMode: 'class',
}