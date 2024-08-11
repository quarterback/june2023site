module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        skin: {
          fill: 'rgb(var(--color-background) / <alpha-value>)',
          base: 'rgb(var(--color-text) / <alpha-value>)',
          accent: 'rgb(var(--color-accent) / <alpha-value>)',
          inverted: 'rgb(var(--color-background) / <alpha-value>)',
          primary: 'rgb(var(--color-primary) / <alpha-value>)',
          secondary: 'rgb(var(--color-secondary) / <alpha-value>)',
        },
      },
      fontFamily: {
        sans: ['Ultra', 'sans-serif'],
        serif: ['Slabo 27px', 'serif'],
      },
    },
  },
  plugins: [],
};
