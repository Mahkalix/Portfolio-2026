import { mkdir, writeFile } from "node:fs/promises";
import { webProjects, designProjects, specialDesignProjects } from "../src/data/projects.js";

const base = process.env.SITE_URL || process.env.VITE_SITE_URL;
if (!base || !/^https:\/\/[^/]+/.test(base)) {
  console.log("Skipping sitemap.xml: configure SITE_URL with the verified public canonical domain.");
  process.exit(0);
}
const origin = new URL(base).origin;
const routes = ["/","/about","/projects","/photography","/contact","/copyright","/legal","/privacy","/sitemap",...webProjects.map(p=>`/projects/${p.slug}`),...designProjects.map(p=>`/projects/${p.slug}`),...specialDesignProjects.map(p=>`/projects/${p.slug}`)];
const xml = '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' + [...new Set(routes)].map(path => `  <url><loc>${origin}${path}</loc></url>`).join("\n") + "\n</urlset>\n";
await mkdir("dist",{recursive:true});
await writeFile("dist/sitemap.xml",xml);
await writeFile("dist/robots.txt",`User-agent: *\nAllow: /\nSitemap: ${origin}/sitemap.xml\n`);
console.log(`Generated sitemap.xml for ${origin}`);
