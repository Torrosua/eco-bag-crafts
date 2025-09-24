import puppeteer from 'puppeteer';
import { readFileSync, writeFileSync, mkdirSync } from 'fs';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const routes = [
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
];

async function prerender() {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  
  // Base URL for local server (adjust for production)
  const baseUrl = process.env.PREVIEW_URL || 'http://localhost:8080';
  
  console.log('Starting prerendering...');
  
  for (const route of routes) {
    try {
      console.log(`Prerendering ${route}...`);
      
      // Navigate to the route
      await page.goto(`${baseUrl}${route}`, { 
        waitUntil: 'networkidle2',
        timeout: 30000 
      });
      
      // Wait for React to render
      await page.waitForTimeout(2000);
      
      // Get the rendered HTML
      const html = await page.content();
      
      // Create directory structure
      const outputDir = route === '/' ? '/dist' : `/dist${route}`;
      const outputPath = `${__dirname}/../dist${route === '/' ? '/index.html' : route + '/index.html'}`;
      
      // Create directories if they don't exist
      mkdirSync(dirname(outputPath), { recursive: true });
      
      // Write the HTML file
      writeFileSync(outputPath, html);
      
      console.log(`✓ Prerendered ${route} to ${outputPath}`);
    } catch (error) {
      console.error(`✗ Failed to prerender ${route}:`, error);
    }
  }
  
  await browser.close();
  console.log('Prerendering complete!');
}

prerender().catch(console.error);