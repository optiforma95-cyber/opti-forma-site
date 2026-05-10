#!/usr/bin/env node

/**
 * Convertit assets/images/og-image.svg en JPG (1200x630) via sharp.
 * Si la conversion échoue, met à jour toutes les balises og:image
 * pour pointer vers le SVG.
 *
 * Usage : node generate-og.js
 */

const fs   = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const ROOT     = __dirname;
const SVG_PATH = path.join(ROOT, 'assets', 'images', 'og-image.svg');
const JPG_PATH = path.join(ROOT, 'assets', 'images', 'og-image.jpg');
const BASE_URL = 'https://opti-forma.fr';

// ── Conversion SVG → JPG ────────────────────────────────────────────────────

async function loadSharp() {
  try {
    return require('sharp');
  } catch (_) {
    console.log('sharp absent — installation en cours…');
    execSync('npm install sharp', { stdio: 'inherit', cwd: ROOT });
    return require('sharp');
  }
}

async function convertToJpg() {
  const sharp     = await loadSharp();
  const svgBuffer = fs.readFileSync(SVG_PATH);
  await sharp(svgBuffer)
    .resize(1200, 630)
    .jpeg({ quality: 95, mozjpeg: true })
    .toFile(JPG_PATH);
  console.log('✓ JPG généré :', JPG_PATH);
  return 'jpg';
}

// ── Mise à jour des balises og:image ────────────────────────────────────────

function updateOgImage(ext) {
  const pattern = /(<meta property="og:image" content="https:\/\/opti-forma\.fr\/assets\/images\/og-image\.)(jpg|svg)(")/g;
  const htmlFiles = fs
    .readdirSync(ROOT)
    .filter(f => f.endsWith('.html') && f !== 'opti-forma-preview.html');

  let count = 0;
  for (const file of htmlFiles) {
    const filePath = path.join(ROOT, file);
    const src      = fs.readFileSync(filePath, 'utf8');
    const updated  = src.replace(pattern, `$1${ext}$3`);
    if (updated !== src) {
      fs.writeFileSync(filePath, updated, 'utf8');
      count++;
    }
  }
  console.log(`✓ og:image → .${ext} dans ${count} fichier(s) HTML`);
}

// ── Point d'entrée ───────────────────────────────────────────────────────────

(async () => {
  if (!fs.existsSync(SVG_PATH)) {
    console.error('❌ SVG introuvable :', SVG_PATH);
    process.exit(1);
  }

  let ext;
  try {
    ext = await convertToJpg();
  } catch (err) {
    console.warn('⚠ Conversion JPG impossible :', err.message);
    console.log('→ Utilisation du SVG directement.');
    ext = 'svg';
  }

  updateOgImage(ext);
  console.log(`\nTerminé. og:image pointe vers assets/images/og-image.${ext}`);
})();
