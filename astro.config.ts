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
      description:
        "salah.dev is a personal website and blog that showcases my journey as a software engineer, sharing insights, tutorials, and experiences in the tech industry.",
      favicon: "/favicon/favicon.ico",
      plugins: [starlightThemeObsidian()],
      titleDelimiter: "—",
      // editLink: {
      //   baseUrl: "https://github.com/salah-rashad/salah-docs/blob/main/",
      // },
      logo: {
        src: "/public/favicon/apple-touch-icon.png",
        alt: "salah.dev",
        // replacesTitle: true,
      },
      customCss: ["/src/styles/global.css"],
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
          label: "🐦 Flutter/Dart",
          autogenerate: { directory: "Flutter" },
          collapsed: true,
        },
        {
          label: "🎮 Unity",
          autogenerate: { directory: "Unity" },
          collapsed: true,
        },
      ],
    }),
    react(),
    mdx(),
  ],
});
