import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import generateSitemap from "vite-plugin-sitemap";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(), 
    mode === "development" && componentTagger(),
    generateSitemap({
      hostname: 'https://paperbag.lovable.app',
      dynamicRoutes: [
        '/',
        '/about',
        '/products',
        '/bags',
        '/bags/paper-bags',
        '/bags/laminated-bags',
        '/bags/kraft-bags-with-print',
        '/bags/kraft-bags-with-handles',
        '/bags/clutch-bags',
        '/bags/eco-cardboard-bags',
        '/components',
        '/components/paper-handles',
        '/components/handles-with-tips',
        '/components/eyelets',
        '/paper-twine',
        '/paper-cutting',
        '/prices',
        '/contacts',
        '/artwork-requirements',
        '/how-we-work',
        '/news'
      ]
    })
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: "dist",
    emptyOutDir: true,
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
}));
