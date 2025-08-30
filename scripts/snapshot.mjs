// scripts/snapshot.mjs
import { chromium } from "playwright";
import fs from "node:fs";
import path from "node:path";

const targets = [
  {
    url: "https://ikomatsushima.cl",
    out: "public/projects/iko.png",
    width: 1200,
    height: 675, // 16:9
  },
  // agrega más sitios si quieres
];

(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext({
    viewport: { width: 1280, height: 800 },
    deviceScaleFactor: 1,
  });

  for (const t of targets) {
    const page = await context.newPage();
    await page.goto(t.url, { waitUntil: "networkidle", timeout: 60000 });

    // Ajuste del viewport exacto para miniatura
    await page.setViewportSize({ width: t.width, height: t.height });

    // Asegura carpeta
    fs.mkdirSync(path.dirname(t.out), { recursive: true });

    await page.screenshot({ path: t.out, fullPage: false });
    console.log(`✅ Captura guardada: ${t.out}`);
    await page.close();
  }

  await context.close();
  await browser.close();
})();
