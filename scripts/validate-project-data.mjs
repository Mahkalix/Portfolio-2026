import { access } from "node:fs/promises";
import { resolve } from "node:path";
import { allProjects } from "../src/data/projects.js";

const requiredFields = ["slug", "title", "category", "year", "use", "description"];
const slugs = new Set();
const errors = [];

for (const project of allProjects) {
  for (const field of requiredFields) {
    if (!project[field]) errors.push(`${project.slug || "Unknown project"}: missing ${field}`);
  }

  if (slugs.has(project.slug)) errors.push(`${project.slug}: duplicate slug`);
  slugs.add(project.slug);

  const assetPaths = [project.image, project.tabIcon, ...(project.slides || [])].filter((path) => path?.startsWith("/"));
  for (const assetPath of assetPaths) {
    try {
      await access(resolve("public", assetPath.slice(1)));
    } catch {
      errors.push(`${project.slug}: missing asset ${assetPath}`);
    }
  }
}

if (errors.length) {
  console.error(errors.map((error) => `- ${error}`).join("\n"));
  process.exitCode = 1;
} else {
  console.log(`Validated ${allProjects.length} projects and their local assets.`);
}
