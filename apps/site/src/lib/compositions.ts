/**
 * Fixed icon compositions used across the page (hero strip, mobile demo). Every
 * id here is an approved icon; if any changes state, the code filters against
 * the live data (icons.ts) rather than assuming the id renders — the list is a
 * preference, not a guarantee.
 */

/** 16 icons shown as a strip in the editorial hero. */
export const HERO_STRIP = [
  'sombrero-vueltiao',
  'frailejon',
  'palma-de-cera',
  'arepa',
  'taza-de-tinto',
  'mochila-wayuu',
  'mariposa',
  'jaguar',
  'acordeon-vallenato',
  'ciclismo',
  'volcan',
  'cascada',
  'arrecife-coral',
  'ceiba',
  'empanada',
  'futbol',
]

/** 8 category tiles in the demo phone, with their per-tile stroke color. */
export const DEMO_CATS = [
  'taza-de-tinto',
  'mapa',
  'mar-caribe',
  'sombrero-vueltiao',
  'frailejon',
  'arepa',
  'mariposa',
  'ubicacion',
]

export const DEMO_CAT_STROKES = [
  '#003893',
  '#1c1a17',
  '#003893',
  '#CE1126',
  '#1c1a17',
  '#CE1126',
  '#003893',
  '#1c1a17',
]

/** 4 tabs in the demo phone tab bar. The first (inicio) is the active tab. */
export const DEMO_TABS = ['inicio', 'buscar', 'corazon', 'usuario']
