# Static Site Generation (SSG) Setup

This project now supports Static Site Generation to ensure all pages return meaningful HTML content for SEO and crawlers.

## How It Works

1. **SEO Components**: Each page includes an `SEOHead` component that sets proper meta tags, titles, and descriptions.

2. **Prerendering Script**: `scripts/prerender.js` uses Puppeteer to crawl all routes and generate static HTML files.

3. **Router**: The `Router.tsx` component handles client-side navigation while maintaining URL structure.

## Build Process for SSG

### 1. Development Mode
```bash
npm run dev
# or
vite dev
```
In development, the app runs as a normal SPA.

### 2. Production Build with SSG
```bash
# Step 1: Build the SPA
npm run build

# Step 2: Start a local server to serve the built files
npx serve dist -p 8080

# Step 3: Run prerendering (in a separate terminal)
node scripts/prerender.js

# The script will generate static HTML files for all routes
```

### 3. Suggested Package.json Scripts
Add these scripts to your package.json:

```json
{
  "scripts": {
    "build:ssg": "vite build && npm run prerender",
    "prerender": "node scripts/prerender.js",
    "serve": "npx serve dist -p 8080"
  }
}
```

## Routes That Are Pre-rendered

- `/` - Home page
- `/about` - About page
- `/products` - Products overview
- `/bags` - Bags landing page
- `/bags/paper-bags` - Paper bags
- `/bags/laminated-bags` - Laminated bags
- `/bags/kraft-bags-with-print` - Kraft bags with print
- `/bags/kraft-bags-with-handles` - Kraft bags with handles
- `/bags/clutch-bags` - Clutch bags
- `/bags/eco-cardboard-bags` - Eco cardboard bags
- `/components` - Components landing page
- `/components/paper-handles` - Paper handles
- `/components/handles-with-tips` - Handles with tips
- `/components/eyelets` - Eyelets
- `/paper-twine` - Paper twine
- `/paper-cutting` - Paper cutting
- `/prices` - Prices
- `/contacts` - Contact page
- `/artwork-requirements` - Artwork requirements
- `/how-we-work` - How we work
- `/news` - News/Blog

## SEO Benefits

- ✅ Each page has unique title, description, and meta tags
- ✅ Static HTML is served immediately (no waiting for JavaScript)
- ✅ Crawlers can read the content properly
- ✅ Better Core Web Vitals scores
- ✅ Improved search engine indexing

## Deployment

After building with SSG, deploy the `dist` folder contents to your hosting provider. The static HTML files will be served for initial page loads, and JavaScript will take over for subsequent navigation (SPA behavior).

## Testing SSG

To verify that SSG is working:

1. Build the project: `npm run build`
2. Run prerendering: `npm run prerender`
3. Check that HTML files exist in `/dist/about/index.html`, `/dist/products/index.html`, etc.
4. Open these HTML files directly and verify they contain the actual page content, not just the empty SPA shell.