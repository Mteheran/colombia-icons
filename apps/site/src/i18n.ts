import type { Categoria } from './data/icons'

/**
 * Site copy in the three supported languages. The original site shipped only
 * Spanish; the Claude Design handoff added English, and Portuguese is kept as
 * the third language required for this repo. All user-facing strings live here
 * so a new language is one more block, not a hunt across components.
 */
export type Lang = 'es' | 'en' | 'pt'

export const LANGS: Lang[] = ['es', 'en', 'pt']

export const LANG_LABELS: Record<Lang, string> = {
  es: 'ES',
  en: 'EN',
  pt: 'PT',
}

/** Category names per language (data/icons.ts only knows Spanish). */
export const CATEGORY_LABELS_I18N: Record<Categoria, Record<Lang, string>> = {
  naturaleza: { es: 'Naturaleza', en: 'Nature', pt: 'Natureza' },
  cultura: { es: 'Cultura', en: 'Culture', pt: 'Cultura' },
  gastronomia: { es: 'Gastronomía', en: 'Food', pt: 'Gastronomia' },
  mapas: { es: 'Mapas', en: 'Maps', pt: 'Mapas' },
  deportes: { es: 'Deportes', en: 'Sports', pt: 'Esportes' },
  genericos: { es: 'Genéricos', en: 'Generic', pt: 'Genéricos' },
}

export type Copy = {
  navIcons: string
  navDemo: string
  navGuide: string
  navReport: string
  h1a: string
  h1b: string
  sub: string
  ctaBrowse: string
  ctaDemo: string
  install: string
  usage: string
  gallery: string
  searchPh: string
  all: string
  noResults: string
  proposeIt: string
  stroke: string
  iconsWord: string
  statIcons: string
  statCats: string
  statColors: string
  statFormats: string
  copy: string
  copied: string
  demoKicker: string
  demoTitle: string
  demoSearchPh: string
  demoKicker2: string
  demoH2: string
  demoP: string
  demoCta: string
  guideH2: string
  guideCta: string
  guideP: string
  issuesH2: string
  issueTplTitle: string
  issuesP: string
  ctaBug: string
  ctaIcon: string
  footerP: string
  footerProject: string
  footerPackages: string
  themeToDark: string
  themeToLight: string
  demoCatLabels: string[]
  demoTabLabels: string[]
}

export const T: Record<Lang, Copy> = {
  es: {
    navIcons: 'Iconos',
    navDemo: 'Demo',
    navGuide: 'Guía de diseño',
    navReport: 'Reportar',
    h1a: 'Iconos de Colombia',
    h1b: 'para tus interfaces.',
    sub: 'Biblioteca de iconos de línea inspirada en Colombia: naturaleza, cultura, gastronomía, deportes y un set genérico completo. Grid de 24×24, trazo de 1.5 px y currentColor.',
    ctaBrowse: 'Explorar los iconos',
    ctaDemo: 'Ver el demo',
    install: 'Instalación',
    usage: 'Uso',
    gallery: 'Galería',
    searchPh: 'Buscar: arepa, frailejon, usuario…',
    all: 'Todos',
    noResults: 'Sin resultados para',
    proposeIt: 'Propón este icono como issue →',
    stroke: 'Trazo',
    iconsWord: 'iconos',
    statIcons: 'Iconos aprobados',
    statCats: 'Categorías',
    statColors: 'Colores',
    statFormats: 'Formatos',
    copy: 'Copiar',
    copied: 'Copiado',
    demoKicker: 'DESCUBRE',
    demoTitle: 'Colombia',
    demoSearchPh: 'Buscar destinos',
    demoKicker2: 'Demo',
    demoH2: 'Una app completa, solo con la biblioteca',
    demoP: 'El demo de viajes arma una app de turismo usando únicamente iconos del set: navegación, categorías, estados y acciones. Sirve como referencia de tamaños, color y contraste en pantalla real.',
    demoCta: 'Código del demo',
    guideH2: 'Cómo diseñar un icono',
    guideCta: 'Leer la guía completa',
    guideP: 'Si vas a aportar un icono, la especificación no se negocia por icono: mismo grid, mismo trazo, mismo estilo. Estas son las reglas del documento del repositorio.',
    issuesH2: 'Reportar un error o proponer un icono',
    issueTplTitle: 'Plantilla del issue',
    issuesP: 'Todo pasa por los issues del repositorio. Cuatro pasos y queda registrado con el contexto suficiente para trabajarlo.',
    ctaBug: 'Reportar un error',
    ctaIcon: 'Proponer un icono',
    footerP: 'Iconos de línea inspirados en Colombia para React, Angular y Blazor. MIT.',
    footerProject: 'Proyecto',
    footerPackages: 'Paquetes',
    themeToDark: 'Cambiar a modo oscuro',
    themeToLight: 'Cambiar a modo claro',
    demoCatLabels: ['Cafés', 'Rutas', 'Playas', 'Cultura', 'Páramo', 'Comida', 'Fauna', 'Mapas'],
    demoTabLabels: ['Inicio', 'Buscar', 'Guardado', 'Perfil'],
  },
  en: {
    navIcons: 'Icons',
    navDemo: 'Demo',
    navGuide: 'Design guide',
    navReport: 'Report',
    h1a: 'Colombia icons',
    h1b: 'for your interfaces.',
    sub: 'A line-icon library inspired by Colombia: nature, culture, food, sports and a complete generic set. 24×24 grid, 1.5 px stroke, currentColor.',
    ctaBrowse: 'Browse the icons',
    ctaDemo: 'See the demo',
    install: 'Install',
    usage: 'Usage',
    gallery: 'Gallery',
    searchPh: 'Search: arepa, frailejon, usuario…',
    all: 'All',
    noResults: 'No results for',
    proposeIt: 'Propose this icon as an issue →',
    stroke: 'Stroke',
    iconsWord: 'icons',
    statIcons: 'Approved icons',
    statCats: 'Categories',
    statColors: 'Colors',
    statFormats: 'Formats',
    copy: 'Copy',
    copied: 'Copied',
    demoKicker: 'DISCOVER',
    demoTitle: 'Colombia',
    demoSearchPh: 'Search destinations',
    demoKicker2: 'Demo',
    demoH2: 'A full app built only with the library',
    demoP: 'The travel demo builds a tourism app using icons from the set alone: navigation, categories, states and actions. It doubles as a reference for size, color and contrast on a real screen.',
    demoCta: 'Demo source',
    guideH2: 'How to design an icon',
    guideCta: 'Read the full guide',
    guideP: 'If you contribute an icon, the spec is not negotiable per icon: same grid, same stroke, same style. These are the rules from the repository document.',
    issuesH2: 'Report a bug or propose an icon',
    issueTplTitle: 'Issue template',
    issuesP: 'Everything goes through the repository issues. Four steps and it lands with enough context to work on.',
    ctaBug: 'Report a bug',
    ctaIcon: 'Propose an icon',
    footerP: 'Line icons inspired by Colombia for React, Angular and Blazor. MIT.',
    footerProject: 'Project',
    footerPackages: 'Packages',
    themeToDark: 'Switch to dark mode',
    themeToLight: 'Switch to light mode',
    demoCatLabels: ['Coffee', 'Trails', 'Beaches', 'Culture', 'Páramo', 'Food', 'Wildlife', 'Maps'],
    demoTabLabels: ['Home', 'Search', 'Saved', 'Profile'],
  },
  pt: {
    navIcons: 'Ícones',
    navDemo: 'Demo',
    navGuide: 'Guia de design',
    navReport: 'Reportar',
    h1a: 'Ícones da Colômbia',
    h1b: 'para suas interfaces.',
    sub: 'Biblioteca de ícones de linha inspirada na Colômbia: natureza, cultura, gastronomia, esportes e um conjunto genérico completo. Grid de 24×24, traço de 1,5 px e currentColor.',
    ctaBrowse: 'Explorar os ícones',
    ctaDemo: 'Ver o demo',
    install: 'Instalação',
    usage: 'Uso',
    gallery: 'Galeria',
    searchPh: 'Buscar: arepa, frailejon, usuario…',
    all: 'Todos',
    noResults: 'Sem resultados para',
    proposeIt: 'Proponha este ícone como issue →',
    stroke: 'Traço',
    iconsWord: 'ícones',
    statIcons: 'Ícones aprovados',
    statCats: 'Categorias',
    statColors: 'Cores',
    statFormats: 'Formatos',
    copy: 'Copiar',
    copied: 'Copiado',
    demoKicker: 'DESCUBRA',
    demoTitle: 'Colombia',
    demoSearchPh: 'Buscar destinos',
    demoKicker2: 'Demo',
    demoH2: 'Um app completo, só com a biblioteca',
    demoP: 'O demo de viagens monta um app de turismo usando apenas ícones do conjunto: navegação, categorias, estados e ações. Serve como referência de tamanhos, cor e contraste em tela real.',
    demoCta: 'Código do demo',
    guideH2: 'Como desenhar um ícone',
    guideCta: 'Ler o guia completo',
    guideP: 'Se você for contribuir com um ícone, a especificação não é negociável por ícone: mesmo grid, mesmo traço, mesmo estilo. Estas são as regras do documento do repositório.',
    issuesH2: 'Reportar um erro ou propor um ícone',
    issueTplTitle: 'Modelo do issue',
    issuesP: 'Tudo passa pelos issues do repositório. Quatro passos e fica registrado com contexto suficiente para trabalhar.',
    ctaBug: 'Reportar um erro',
    ctaIcon: 'Propor um ícone',
    footerP: 'Ícones de linha inspirados na Colômbia para React, Angular e Blazor. MIT.',
    footerProject: 'Projeto',
    footerPackages: 'Pacotes',
    themeToDark: 'Mudar para modo escuro',
    themeToLight: 'Mudar para modo claro',
    demoCatLabels: ['Cafés', 'Rotas', 'Praias', 'Cultura', 'Páramo', 'Comida', 'Fauna', 'Mapas'],
    demoTabLabels: ['Início', 'Buscar', 'Salvos', 'Perfil'],
  },
}

/** Icon design rules shown in the guide section: [number, title, body]. */
export const RULES: Record<Lang, Array<[string, string, string]>> = {
  es: [
    ['01', 'Grid de 24 × 24', 'viewBox="0 0 24 24" y un margen seguro: la mayoría de iconos vive en un área de ~20 × 20, con 2 px de aire por lado.'],
    ['02', 'Trazo de 1.5 px', 'Un solo grosor en todo el icono y en todo el set. Terminaciones y uniones redondeadas.'],
    ['03', 'currentColor, sin relleno', 'stroke="currentColor" y fill="none". Nunca un color fijo: el icono hereda el color del CSS del proyecto.'],
    ['04', 'No diseñes de memoria', 'Busca el objeto real en fotos y mira cómo lo resuelven sets de referencia antes del primer trazo.'],
    ['05', 'Tamaño percibido constante', 'Una estrella y una bandeja paisa deben ocupar la misma caja visual: la galería no puede tener iconos gigantes y diminutos.'],
    ['06', 'kebab-case sin tildes', 'sombrero-vueltiao.svg, en español, sin ñ ni espacios, guardado en icons/svg/<categoria>/ y optimizado con SVGO.'],
  ],
  en: [
    ['01', '24 × 24 grid', 'viewBox="0 0 24 24" plus a safe margin: most icons live inside a ~20 × 20 area, about 2 px of air per side.'],
    ['02', '1.5 px stroke', 'One weight across the whole icon and the whole set. Rounded caps and joins.'],
    ['03', 'currentColor, no fill', 'stroke="currentColor" and fill="none". Never a fixed color: the icon inherits color from the consumer CSS.'],
    ['04', 'Never design from memory', 'Look up the real object in photos and study how reference line sets solve it before the first stroke.'],
    ['05', 'Consistent perceived size', 'A star and a bandeja paisa should fill the same visual box, so the gallery has no giants and no tiny icons.'],
    ['06', 'kebab-case, no accents', 'sombrero-vueltiao.svg, in Spanish, no ñ or spaces, saved in icons/svg/<category>/ and optimized with SVGO.'],
  ],
  pt: [
    ['01', 'Grid de 24 × 24', 'viewBox="0 0 24 24" e uma margem segura: a maioria dos ícones vive numa área de ~20 × 20, com 2 px de ar por lado.'],
    ['02', 'Traço de 1,5 px', 'Uma única espessura em todo o ícone e em todo o conjunto. Terminações e junções arredondadas.'],
    ['03', 'currentColor, sem preenchimento', 'stroke="currentColor" e fill="none". Nunca uma cor fixa: o ícone herda a cor do CSS do projeto.'],
    ['04', 'Não desenhe de memória', 'Procure o objeto real em fotos e veja como os conjuntos de referência o resolvem antes do primeiro traço.'],
    ['05', 'Tamanho percebido constante', 'Uma estrela e uma bandeja paisa devem ocupar a mesma caixa visual: a galeria não pode ter ícones gigantes e minúsculos.'],
    ['06', 'kebab-case sem acentos', 'sombrero-vueltiao.svg, em espanhol, sem ñ nem espaços, salvo em icons/svg/<categoria>/ e otimizado com SVGO.'],
  ],
}

/** Steps to report a bug / propose an icon: [number, title, body]. */
export const STEPS: Record<Lang, Array<[string, string, string]>> = {
  es: [
    ['1', 'Abre un issue en el repositorio', 'github.com/Mteheran/colombia-icons/issues → New issue. Un issue por icono o por error.'],
    ['2', 'Di qué tipo es', 'Error de render o export, o propuesta de icono nuevo. Pon el tipo en el título: [bug] o [icono].'],
    ['3', 'Da el contexto', 'Paquete y versión (React, Angular o Blazor), navegador, id del icono y color usado.'],
    ['4', 'Adjunta evidencia o referencia', 'Captura del problema, o fotos del objeto real si propones un icono nuevo. Añade la categoría sugerida.'],
  ],
  en: [
    ['1', 'Open an issue in the repo', 'github.com/Mteheran/colombia-icons/issues → New issue. One issue per icon or per bug.'],
    ['2', 'State the type', 'Render/export bug, or a new icon proposal. Put the type in the title: [bug] or [icon].'],
    ['3', 'Give the context', 'Package and version (React, Angular or Blazor), browser, icon id and color used.'],
    ['4', 'Attach evidence or reference', 'A screenshot of the problem, or photos of the real object if you propose a new icon. Add the suggested category.'],
  ],
  pt: [
    ['1', 'Abra um issue no repositório', 'github.com/Mteheran/colombia-icons/issues → New issue. Um issue por ícone ou por erro.'],
    ['2', 'Diga qual é o tipo', 'Erro de render ou export, ou proposta de ícone novo. Ponha o tipo no título: [bug] ou [icono].'],
    ['3', 'Dê o contexto', 'Pacote e versão (React, Angular ou Blazor), navegador, id do ícone e cor usada.'],
    ['4', 'Anexe evidência ou referência', 'Captura do problema, ou fotos do objeto real se propõe um ícone novo. Adicione a categoria sugerida.'],
  ],
}

/** GitHub issue template shown in the issues section. */
export const ISSUE_TEMPLATE: Record<Lang, string> = {
  es: `### Tipo
[bug] | [icono]

### Icono
sombrero-vueltiao (categoría: cultura)

### Entorno
paquete: @mteherandev/colombia-icons-react
versión: 0.x
navegador: Chrome 1xx
color: negro | gris | amarillo | azul | rojo

### Qué esperabas
…

### Qué pasó
…

### Referencia visual
(captura, o fotos del objeto real)`,
  en: `### Type
[bug] | [icon]

### Icon
sombrero-vueltiao (category: cultura)

### Environment
package: @mteherandev/colombia-icons-react
version: 0.x
browser: Chrome 1xx
color: black | gray | yellow | blue | red

### Expected
…

### Actual
…

### Visual reference
(screenshot, or photos of the real object)`,
  pt: `### Tipo
[bug] | [icono]

### Ícone
sombrero-vueltiao (categoria: cultura)

### Ambiente
pacote: @mteherandev/colombia-icons-react
versão: 0.x
navegador: Chrome 1xx
cor: negro | gris | amarillo | azul | rojo

### O que você esperava
…

### O que aconteceu
…

### Referência visual
(captura, ou fotos do objeto real)`,
}

/** The design guide doc changes name/URL per language. No PT doc exists yet,
    so Portuguese falls back to the English guide. */
export const GUIDE_DOC: Record<Lang, { file: string; url: string }> = {
  es: {
    file: 'docs/guia-diseno-iconos.es.md',
    url: 'https://github.com/Mteheran/colombia-icons/blob/main/docs/guia-diseno-iconos.es.md',
  },
  en: {
    file: 'docs/icon-design-guide.md',
    url: 'https://github.com/Mteheran/colombia-icons/blob/main/docs/icon-design-guide.md',
  },
  pt: {
    file: 'docs/icon-design-guide.md',
    url: 'https://github.com/Mteheran/colombia-icons/blob/main/docs/icon-design-guide.md',
  },
}

/** Resolve the initial language: stored choice, then browser, then Spanish. */
export function detectLang(): Lang {
  if (typeof window === 'undefined') return 'es'
  const stored = window.localStorage.getItem('colombia-icons-lang')
  if (stored === 'es' || stored === 'en' || stored === 'pt') return stored
  const nav = window.navigator.language.slice(0, 2).toLowerCase()
  if (nav === 'en' || nav === 'pt') return nav
  return 'es'
}
