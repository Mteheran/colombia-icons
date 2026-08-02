# @mteherandev/colombia-icons-angular

Line-icon (outline, minimalist) components for Angular, inspired by Colombia — part of the
[colombia-icons](https://github.com/Mteheran/colombia-icons) project.

Every icon is a 24×24 SVG using `stroke="currentColor"`, so it inherits color from CSS and scales
cleanly at any size. Each icon is a standalone component, so you import only the ones you use.

**Website:** <https://mteheran.github.io/colombia-icons/> — browse, search, and copy every icon name.

## Installation

```bash
npm install @mteherandev/colombia-icons-angular
```

`@angular/core` and `@angular/common` `>= 17` are peer dependencies. The icons are standalone
components, so no `NgModule` is required.

## Usage

Import the icon class and add it to your standalone component's `imports`, then use its
`ci-<name>` selector in the template:

```ts
import { Component } from '@angular/core';
import { JaguarIcon, CheckIcon, EstrellaLlenaIcon } from '@mteherandev/colombia-icons-angular';

@Component({
  selector: 'app-example',
  standalone: true,
  imports: [JaguarIcon, CheckIcon, EstrellaLlenaIcon],
  template: `
    <ci-check />
    <ci-jaguar [size]="32" />
    <ci-estrella-llena [size]="48" color="#FCD116" />
  `,
})
export class ExampleComponent {}
```

Each icon exports a `<PascalName>Icon` class (e.g. `JaguarIcon`) and renders through a
`ci-<kebab-name>` selector (e.g. `<ci-jaguar>`).

### Inputs

| Input   | Type               | Default          | Description                                          |
| ------- | ------------------ | ---------------- | ---------------------------------------------------- |
| `size`  | `number \| string` | `24`             | Width and height (px or any CSS unit, e.g. `"2em"`). |
| `color` | `string`           | `"currentColor"` | Stroke/fill color. Defaults to the inherited color.  |

### Inheriting color from text

Because icons use `currentColor` by default, they follow the surrounding text color:

```html
<span style="color: crimson">
  <ci-jaguar /> matches the text
</span>
```

## Icons

120 icons across `naturaleza`, `cultura`, `gastronomia`, `mapas`, `deportes`, and `genericos`.
See the [full list on the website](https://mteheran.github.io/colombia-icons/) or in the
[repository README](https://github.com/Mteheran/colombia-icons#available-icons).

## License

MIT
