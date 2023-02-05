import type { ManifestOptions } from "vite-plugin-pwa";

export const seoConfig = {
  baseURL: "https://online-chess-clock.netlify.app/",
  description: "An online chess clock to use to play chess with your friends.",
  type: "website",
  image: {
    url: "/chess-clock-logo.png",
    alt: "Chess Clock Logo",
    width: 1200,
    height: 630,
  },
  siteName: "Online Chess Clock",
  twitter: {
    card: "summary_large_image",
  },
};

export const manifest: Partial<ManifestOptions> = {
  theme_color: "#312e2b",
  background_color: "#312e2b",
  display: "standalone",
  scope: "/",
  start_url: "/",
  name: "Online Chess Clock",
  short_name: "Chess Clock",
  description: "An online chess clock to use to play chess with your friends.",
  icons: [
    {
      src: "/icon-192x192.png",
      sizes: "192x192",
      type: "image/png",
    },
    {
      src: "/icon-256x256.png",
      sizes: "256x256",
      type: "image/png",
    },
    {
      src: "/icon-384x384.png",
      sizes: "384x384",
      type: "image/png",
    },
    {
      src: "/icon-512x512.png",
      sizes: "512x512",
      type: "image/png",
    },
  ],
};
