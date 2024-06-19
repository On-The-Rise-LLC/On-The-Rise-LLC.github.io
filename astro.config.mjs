import { defineConfig } from 'astro/config';
import icon from "astro-icon";
import sitemap from "@astrojs/sitemap";
import robotsTxt from "astro-robots-txt";

// https://astro.build/config
export default defineConfig({
  site: "https://www.ontherisefoundation.com",
  integrations: [
    icon({
      include: {
        "fa6-brands": ["facebook", "tiktok"]
      }
    }),
    sitemap(),
    robotsTxt()
  ],
});