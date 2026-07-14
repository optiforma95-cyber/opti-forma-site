#!/usr/bin/env node

/**
 * Génère le PDF de la charte graphique v2.0 à partir de
 * assets/charte/charte-graphique-v2.html, via le Chrome installé
 * (mode headless --print-to-pdf). Aucune dépendance npm requise.
 *
 * Usage : node generate-charte.js
 */

const fs   = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');

const ROOT = __dirname;
const HTML = path.join(ROOT, 'assets', 'charte', 'charte-graphique-v2.html');
const PDF  = path.join(ROOT, 'opti-forma-charte-graphique.pdf');

// Emplacements Chrome/Edge usuels sous Windows
const CANDIDATES = [
  'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
  'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
  'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
  'C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe',
];

function findBrowser() {
  const found = CANDIDATES.find(p => fs.existsSync(p));
  if (!found) {
    console.error('❌ Aucun Chrome/Edge trouvé. Installe Chrome ou adapte CANDIDATES.');
    process.exit(1);
  }
  return found;
}

(function main() {
  if (!fs.existsSync(HTML)) {
    console.error('❌ Source HTML introuvable :', HTML);
    process.exit(1);
  }
  const browser = findBrowser();
  const fileUrl = 'file:///' + HTML.replace(/\\/g, '/');

  execFileSync(browser, [
    '--headless=new',
    '--disable-gpu',
    '--no-pdf-header-footer',
    '--print-to-pdf-no-header',
    `--print-to-pdf=${PDF}`,
    fileUrl,
  ], { stdio: 'inherit' });

  console.log('✓ PDF charte v2.0 généré :', PDF);
})();
