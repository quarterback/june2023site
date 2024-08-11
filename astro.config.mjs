import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import remarkToc from "remark-toc";
import remarkCollapse from "remark-collapse";
import sitemap from "@astrojs/sitemap";
import { SITE } from "./src/config";

// https://astro.build/config
export default defineConfig({
  site: SITE.website,
  integrations: [
    tailwind({
      config: {
        applyBaseStyles: false,
        theme: {
          extend: {
            colors: {
              skin: {
                fill: 'rgb(var(--color-fill) / <alpha-value>)',
                base: 'rgb(var(--color-text-base) / <alpha-value>)',
                accent: 'rgb(var(--color-accent) / <alpha-value>)',
                inverted: 'rgb(var(--color-fill) / <alpha-value>)',
                card: 'rgb(var(--color-card) / <alpha-value>)',
                'card-muted': 'rgb(var(--color-card-muted) / <alpha-value>)',
                border: 'rgb(var(--color-border) / <alpha-value>)',
              },
            },
          },
        },
      },
    }),
    react(),
    sitemap(),
  ],
  markdown: {
    remarkPlugins: [
      remarkToc,
      [
        remarkCollapse,
        {
          test: "Table of contents",
        },
      ],
    ],
    shikiConfig: {
      theme: "one-dark-pro",
      wrap: true,
    },
    extendDefaultPlugins: true,
  },
  vite: {
    optimizeDeps: {
      exclude: ["@resvg/resvg-js"],
    },
  },
});
