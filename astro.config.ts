import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel";
import starlight from "@astrojs/starlight";
import starlightThemeObsidian from "starlight-theme-obsidian";
import react from "@astrojs/react";
import mdx from "@astrojs/mdx";

export default defineConfig({
  output: "server",
  adapter: vercel({
    imageService: true,
    webAnalytics: {
      enabled: true,
    },
  }),
  integrations: [
    starlight({
      title: "salah.dev",
      favicon: "/favicon/favicon.ico",
      plugins: [starlightThemeObsidian()],
      // editLink: {
      //   baseUrl: "https://github.com/salah-rashad/salah-docs/blob/main/",
      // },
      logo: {
        src: "/public/favicon/apple-touch-icon.png",
        alt: "salah.dev",
        // replacesTitle: true,
      },
      customCss: ["/src/styles/custom.css"],
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/salah-rashad/",
        },
        {
          icon: "linkedin",
          label: "LinkedIn",
          href: "https://www.linkedin.com/in/salah-rashad/",
        },
        {
          icon: "email",
          label: "Gmail",
          href: "mailto:salah.r.ahmed@gmail.com",
        },
      ],
      sidebar: [
        {
          label: "About Me",
          items: [
            { label: "About Me", slug: "about-me/about-me" },
          ],
        },
        {
          label: "Reference",
          autogenerate: { directory: "Guides" },
        },
        {
          label: "Reference",
          autogenerate: { directory: "Reference" },
        },
      ],
    }),
    react(),
    mdx(),
  ],
});