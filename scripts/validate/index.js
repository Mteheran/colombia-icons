#!/usr/bin/env node
/**
 * Valida la fuente de verdad de íconos antes de generar/compilar los paquetes
 * (ver CLAUDE.md §8: "valida que no haya SVGs rotos o duplicados").
 *
 * Comprueba, sobre los íconos con estado "aprobado" en icons/manifest.json:
 *   1. Que cada uno tenga su archivo en icons/svg/<categoria>/<id>.svg (no roto).
 *   2. Que no haya `id` duplicados en el manifest.
 *   3. Que no haya colisiones de PascalCase (romperían la generación, que usa el
 *      mismo nombre de archivo de componente en React y Blazor).
 *   4. Que cada SVG aprobado parsee (tenga una etiqueta raíz <svg> válida).
 *
 * Sale con código 1 y lista todos los errores encontrados si algo falla.
 *
 * Uso: node scripts/validate/index.js
 */
'use strict';

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..', '..');
const SVG_DIR = path.join(ROOT, 'icons', 'svg');
const MANIFEST = path.join(ROOT, 'icons', 'manifest.json');

/** kebab-case → PascalCase (`circle-check` → `CircleCheck`). */
function toPascalCase(id) {
  return id
    .split('-')
    .filter(Boolean)
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join('');
}

function main() {
  const errors = [];

  const manifest = JSON.parse(fs.readFileSync(MANIFEST, 'utf8'));
  const all = manifest.icons || [];

  // 2. IDs duplicados (en todo el manifest, sin importar el estado).
  const seenIds = new Map();
  for (const icon of all) {
    seenIds.set(icon.id, (seenIds.get(icon.id) || 0) + 1);
  }
  for (const [id, count] of seenIds) {
    if (count > 1) errors.push(`id duplicado en el manifest: "${id}" (${count} veces)`);
  }

  const approved = all.filter((i) => i.estado === 'aprobado');

  // 3. Colisiones de PascalCase entre aprobados.
  const seenPascal = new Map();
  for (const icon of approved) {
    const pascal = toPascalCase(icon.id);
    if (seenPascal.has(pascal)) {
      errors.push(
        `colisión de nombre de componente "${pascal}": "${icon.id}" y "${seenPascal.get(pascal)}"`
      );
    } else {
      seenPascal.set(pascal, icon.id);
    }
  }

  // 1 + 4. Archivo presente y SVG parseable.
  for (const icon of approved) {
    const file = path.join(SVG_DIR, icon.categoria, `${icon.id}.svg`);
    if (!fs.existsSync(file)) {
      errors.push(`ícono aprobado sin archivo SVG: ${path.relative(ROOT, file)}`);
      continue;
    }
    const raw = fs.readFileSync(file, 'utf8');
    if (!/<svg\b[^>]*>/i.test(raw) || !/<\/svg>/i.test(raw)) {
      errors.push(`SVG roto (sin etiqueta <svg> raíz válida): ${path.relative(ROOT, file)}`);
    }
  }

  if (errors.length > 0) {
    console.error(`Validación fallida — ${errors.length} error(es):`);
    for (const e of errors) console.error(`  ✗ ${e}`);
    process.exit(1);
  }

  console.log(`Validación OK — ${approved.length} íconos aprobados, sin SVGs rotos ni duplicados.`);
}

main();
