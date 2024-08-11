module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      // Your existing theme extensions...
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    // Any other plugins you're using...
  ],
};
