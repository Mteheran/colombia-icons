#!/usr/bin/env node
/**
 * Genera los componentes de los paquetes React y Angular a partir de los SVG
 * aprobados en icons/svg/ (fuente única de verdad, ver CLAUDE.md §7).
 *
 * - Lee icons/manifest.json y toma solo los íconos con estado "aprobado".
 * - No re-optimiza los SVG: se generan "como están" para ser fieles a lo aprobado.
 *
 * Uso: node scripts/generate/index.js
 */
'use strict';

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..', '..');
const SVG_DIR = path.join(ROOT, 'icons', 'svg');
const MANIFEST = path.join(ROOT, 'icons', 'manifest.json');
const REACT_SRC = path.join(ROOT, 'packages', 'react', 'src');
const ANGULAR_SRC = path.join(ROOT, 'packages', 'angular', 'src');
const BLAZOR_DIR = path.join(ROOT, 'packages', 'blazor');

/** kebab-case → PascalCase (`circle-check` → `CircleCheck`). */
function toPascalCase(id) {
  return id
    .split('-')
    .filter(Boolean)
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join('');
}

/** Atributos SVG kebab → camelCase para JSX de React. */
function attrNameToJsx(name) {
  if (name === 'xmlns') return 'xmlns';
  if (name === 'class') return 'className';
  return name.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
}

/**
 * Separa la etiqueta <svg ...> raíz de su contenido interno.
 * Devuelve { attrs: [[name, value], ...], inner: string }.
 */
function parseSvg(raw) {
  const openMatch = raw.match(/<svg\b([^>]*)>/i);
  if (!openMatch) throw new Error('SVG sin etiqueta <svg> raíz');
  const attrsStr = openMatch[1];
  const attrs = [];
  const attrRe = /([a-zA-Z_:][-a-zA-Z0-9_:.]*)\s*=\s*"([^"]*)"/g;
  let m;
  while ((m = attrRe.exec(attrsStr)) !== null) {
    attrs.push([m[1], m[2]]);
  }
  const inner = raw
    .slice(openMatch.index + openMatch[0].length, raw.lastIndexOf('</svg>'))
    .trim();
  return { attrs, inner };
}

/** Normaliza el contenido interno a una sola línea compacta. */
function compactInner(inner) {
  return inner
    .replace(/>\s+</g, '><')
    .replace(/\s*\n\s*/g, ' ')
    .trim();
}

function loadApprovedIcons() {
  const manifest = JSON.parse(fs.readFileSync(MANIFEST, 'utf8'));
  const icons = (manifest.icons || []).filter((i) => i.estado === 'aprobado');
  return icons
    .map((i) => {
      const file = path.join(SVG_DIR, i.categoria, `${i.id}.svg`);
      if (!fs.existsSync(file)) {
        throw new Error(`SVG aprobado sin archivo: ${file}`);
      }
      const raw = fs.readFileSync(file, 'utf8');
      const { attrs, inner } = parseSvg(raw);
      return {
        id: i.id,
        categoria: i.categoria,
        pascal: toPascalCase(i.id),
        attrs,
        inner: compactInner(inner),
      };
    })
    .sort((a, b) => a.id.localeCompare(b.id));
}

/* ---------------------------------------------------------------- React ---- */

function reactRootAttrs(attrs) {
  // Reconstruye los atributos del <svg> raíz para JSX, preservando los del
  // SVG fuente salvo width/height (→ {size}). El color se inyecta vía style.
  const parts = [];
  for (const [name, value] of attrs) {
    if (name === 'width' || name === 'height') {
      parts.push(`${name}={size}`);
      continue;
    }
    parts.push(`${attrNameToJsx(name)}="${value}"`);
  }
  return parts.join(' ');
}

function reactComponent(icon) {
  const rootAttrs = reactRootAttrs(icon.attrs);
  const inner = JSON.stringify(icon.inner);
  return `import { forwardRef } from 'react';
import type { IconProps } from '../types';

export const ${icon.pascal} = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, color = 'currentColor', style, ...props }, ref) => (
    <svg
      ref={ref}
      ${rootAttrs}
      style={{ color, ...style }}
      {...props}
      dangerouslySetInnerHTML={{ __html: ${inner} }}
    />
  )
);

${icon.pascal}.displayName = '${icon.pascal}';
`;
}

function generateReact(icons) {
  const iconsDir = path.join(REACT_SRC, 'icons');
  fs.rmSync(iconsDir, { recursive: true, force: true });
  fs.mkdirSync(iconsDir, { recursive: true });

  for (const icon of icons) {
    fs.writeFileSync(
      path.join(iconsDir, `${icon.pascal}.tsx`),
      reactComponent(icon),
      'utf8'
    );
  }

  fs.writeFileSync(
    path.join(REACT_SRC, 'types.ts'),
    `import type { SVGProps } from 'react';

export interface IconProps extends SVGProps<SVGSVGElement> {
  /** Ancho y alto del ícono en px (o cualquier unidad CSS). Default: 24. */
  size?: number | string;
  /** Color del trazo/relleno. Default: 'currentColor' (hereda del texto). */
  color?: string;
}
`,
    'utf8'
  );

  const exports = icons
    .map((i) => `export { ${i.pascal} } from './icons/${i.pascal}';`)
    .join('\n');
  fs.writeFileSync(
    path.join(REACT_SRC, 'index.ts'),
    `export type { IconProps } from './types';\n${exports}\n`,
    'utf8'
  );
}

/* -------------------------------------------------------------- Angular ---- */

function angularTemplate(attrs, inner) {
  // Reconstruye el <svg> raíz para un template de Angular, preservando los
  // atributos fuente salvo width/height (→ [attr.width]/[attr.height]) y
  // añadiendo [style.color].
  const parts = [];
  for (const [name, value] of attrs) {
    if (name === 'width') {
      parts.push('[attr.width]="size"');
      continue;
    }
    if (name === 'height') {
      parts.push('[attr.height]="size"');
      continue;
    }
    parts.push(`${name}="${value}"`);
  }
  parts.push('[style.color]="color"');
  return `<svg ${parts.join(' ')}>${inner}</svg>`;
}

function angularComponent(icon) {
  const template = angularTemplate(icon.attrs, icon.inner);
  return `import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'ci-${icon.id}',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: \`${template}\`,
})
export class ${icon.pascal}Icon {
  @Input() size: number | string = 24;
  @Input() color = 'currentColor';
}
`;
}

function generateAngular(icons) {
  const iconsDir = path.join(ANGULAR_SRC, 'icons');
  fs.rmSync(iconsDir, { recursive: true, force: true });
  fs.mkdirSync(iconsDir, { recursive: true });

  for (const icon of icons) {
    fs.writeFileSync(
      path.join(iconsDir, `${icon.id}.component.ts`),
      angularComponent(icon),
      'utf8'
    );
  }

  const exports = icons
    .map((i) => `export * from './icons/${i.id}.component';`)
    .join('\n');
  fs.writeFileSync(
    path.join(ANGULAR_SRC, 'public-api.ts'),
    `${exports}\n`,
    'utf8'
  );
}

/* --------------------------------------------------------------- Blazor ---- */

function blazorSvg(attrs, inner) {
  // Reconstruye el <svg> raíz para un componente .razor, preservando los
  // atributos fuente salvo width/height (→ @Size) y añadiendo style="color:@Color".
  const parts = [];
  for (const [name, value] of attrs) {
    if (name === 'width') {
      parts.push('width="@Size"');
      continue;
    }
    if (name === 'height') {
      parts.push('height="@Size"');
      continue;
    }
    parts.push(`${name}="${value}"`);
  }
  parts.push('style="color:@Color"');
  parts.push('@attributes="AdditionalAttributes"');
  return `<svg ${parts.join(' ')}>${inner}</svg>`;
}

function blazorComponent(icon) {
  const svg = blazorSvg(icon.attrs, icon.inner);
  return `@namespace ColombiaIcons.Blazor.Icons

${svg}

@code {
    /// <summary>Ancho y alto del ícono (px o cualquier unidad CSS). Default: "24".</summary>
    [Parameter] public string Size { get; set; } = "24";

    /// <summary>Color del trazo/relleno. Default: "currentColor" (hereda del texto).</summary>
    [Parameter] public string Color { get; set; } = "currentColor";

    /// <summary>Atributos HTML adicionales (class, aria-*, etc.).</summary>
    [Parameter(CaptureUnmatchedValues = true)]
    public IDictionary<string, object>? AdditionalAttributes { get; set; }
}
`;
}

function generateBlazor(icons) {
  const iconsDir = path.join(BLAZOR_DIR, 'Icons');
  fs.rmSync(iconsDir, { recursive: true, force: true });
  fs.mkdirSync(iconsDir, { recursive: true });

  for (const icon of icons) {
    fs.writeFileSync(
      path.join(iconsDir, `${icon.pascal}.razor`),
      blazorComponent(icon),
      'utf8'
    );
  }
}

/* ----------------------------------------------------------------- main ---- */

function main() {
  const icons = loadApprovedIcons();
  generateReact(icons);
  generateAngular(icons);
  generateBlazor(icons);
  console.log(
    `Generados ${icons.length} íconos aprobados → React (packages/react/src) + Angular (packages/angular/src) + Blazor (packages/blazor/Icons).`
  );
}

main();
