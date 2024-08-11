const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  darkMode: 'class', // or 'media' for media-query based
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        skin: {
          fill: 'var(--color-fill)',
          accent: 'var(--color-accent)',
          inverted: 'var(--color-text-base)',
          card: 'var(--color-card)',
          'card-muted': 'var(--color-card-muted)',
          base: 'var(--color-text-base)',
          muted: 'var(--color-text-muted)',
        },
      },
      textColor: {
        skin: {
          base: 'var(--color-text-base)',
          accent: 'var(--color-accent)',
          inverted: 'var(--color-fill)',
        },
      },
      backgroundColor: {
        skin: {
          fill: 'var(--color-fill)',
          accent: 'var(--color-accent)',
          inverted: 'var(--color-text-base)',
          card: 'var(--color-card)',
          'card-muted': 'var(--color-card-muted)',
        },
      },
      outlineColor: {
        skin: {
          fill: 'var(--color-accent)',
        },
      },
      borderColor: {
        skin: {
          line: 'var(--color-border)',
          fill: 'var(--color-text-base)',
          accent: 'var(--color-accent)',
        },
      },
      fill: {
        skin: {
          base: 'var(--color-text-base)',
          accent: 'var(--color-accent)',
        },
        transparent: 'transparent',
      },
      fontFamily: {
        mono: ['IBM Plex Mono', ...defaultTheme.fontFamily.mono],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
