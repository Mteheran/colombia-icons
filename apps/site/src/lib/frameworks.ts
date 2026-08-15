import { type ColorKey, colorValue } from './colors'

export type Framework = 'react' | 'angular' | 'blazor'

export const FRAMEWORKS: { key: Framework; label: string }[] = [
  { key: 'react', label: 'React' },
  { key: 'angular', label: 'Angular' },
  { key: 'blazor', label: 'Blazor' },
]

/** kebab-case id → PascalCase component name (used by React and Blazor). */
export function pascalCase(id: string): string {
  return id
    .split('-')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join('')
}

export function installCmd(fw: Framework): string {
  return fw === 'blazor'
    ? 'dotnet add package ColombiaIcons.Blazor'
    : `npm install @mteherandev/colombia-icons-${fw}`
}

/** Generic usage snippet for the hero install card (uses Frailejon as example). */
export function usageCode(fw: Framework): string {
  if (fw === 'react') {
    return "import { Frailejon } from '@mteherandev/colombia-icons-react';\n\n<Frailejon size={24} color=\"currentColor\" />"
  }
  if (fw === 'angular') {
    return "import { CiIconComponent } from '@mteherandev/colombia-icons-angular';\n\n<ci-icon name=\"frailejon\" />"
  }
  return '@using ColombiaIcons.Blazor.Icons\n\n<Frailejon Size="24" />\n<EstrellaLlena Size="48" Color="#FCD116" />'
}

/** Short component reference shown as the modal subtitle / list column. */
export function componentRef(fw: Framework, id: string): string {
  return fw === 'angular' ? `<ci-icon name="${id}" />` : `<${pascalCase(id)} />`
}

/** Per-icon snippet for the modal, carrying the selected color. */
export function iconSnippet(fw: Framework, id: string, color: ColorKey): string {
  const p = pascalCase(id)
  // Tricolor has no single hex; the component keeps currentColor and the
  // gradient is applied via CSS in the consumer app.
  const colorAttr = color === 'tricolor' ? 'currentColor' : colorValue(color)
  if (fw === 'react') {
    return `import { ${p} } from '@mteherandev/colombia-icons-react';\n\n<${p} size={24} color="${colorAttr}" />`
  }
  if (fw === 'angular') {
    return `<ci-icon name="${id}" style="color:${colorAttr}" />`
  }
  return `<${p} Size="24" Color="${colorAttr}" />`
}

/** Demo tab-bar source shown next to the phone mockup. */
export function demoCode(fw: Framework): string {
  if (fw === 'blazor') {
    return '@using ColombiaIcons.Blazor.Icons\n\n<nav class="tabbar">\n  <Inicio Size="20" Color="#CE1126" />\n  <Buscar Size="20" />\n  <Corazon Size="20" />\n  <Usuario Size="20" />\n</nav>'
  }
  return "import { Inicio, Buscar, Corazon, Usuario } from '@mteherandev/colombia-icons-react';\n\nexport const TabBar = () => (\n  <nav className=\"tabbar\">\n    <Inicio size={20} color=\"#CE1126\" />\n    <Buscar size={20} />\n    <Corazon size={20} />\n    <Usuario size={20} />\n  </nav>\n);"
}
