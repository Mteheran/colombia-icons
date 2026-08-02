# @mteherandev/colombia-icons-react

Line-icon (outline, minimalist) components for React, inspired by Colombia — part of the
[colombia-icons](https://github.com/Mteheran/colombia-icons) project.

Every icon is a 24×24 SVG using `stroke="currentColor"`, so it inherits color from CSS and scales
cleanly at any size. The package is tree-shakeable (one component per icon) and ships ESM + CJS
builds with TypeScript types.

**Website:** <https://mteheran.github.io/colombia-icons/> — browse, search, and copy every icon name.

## Installation

```bash
npm install @mteherandev/colombia-icons-react
```

`react >= 17` is a peer dependency.

## Usage

Import any icon by its PascalCase name and use it as a component:

```tsx
import { Jaguar, Check, EstrellaLlena } from '@mteherandev/colombia-icons-react';

export function Example() {
  return (
    <>
      <Check />
      <Jaguar size={32} />
      <EstrellaLlena size={48} color="#FCD116" />
    </>
  );
}
```

### Props

| Prop        | Type               | Default          | Description                                          |
| ----------- | ------------------ | ---------------- | ---------------------------------------------------- |
| `size`      | `number \| string` | `24`             | Width and height (px or any CSS unit, e.g. `"2em"`). |
| `color`     | `string`           | `"currentColor"` | Stroke/fill color. Defaults to the inherited color.  |
| `className` | `string`           | —                | Applied to the root `<svg>`.                         |

Any other `SVGProps<SVGSVGElement>` (`onClick`, `aria-label`, `style`, …) are forwarded to the
root `<svg>`, and a `ref` is forwarded to the same element.

### Inheriting color from text

Because icons use `currentColor` by default, they follow the surrounding text color:

```tsx
<span style={{ color: 'crimson' }}>
  <Jaguar /> matches the text
</span>
```

## Icons

120 icons across `naturaleza`, `cultura`, `gastronomia`, `mapas`, `deportes`, and `genericos`.
See the [full list on the website](https://mteheran.github.io/colombia-icons/) or in the
[repository README](https://github.com/Mteheran/colombia-icons#available-icons).

## License

MIT
