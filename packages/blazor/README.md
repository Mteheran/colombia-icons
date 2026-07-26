# ColombiaIcons.Blazor

Line-icon (outline, minimalist) components for Blazor, inspired by Colombia — part of the
[colombia-icons](https://github.com/Mteheran/colombia-icons) project.

Every icon is a 24×24 SVG using `stroke="currentColor"`, so it inherits color from CSS and scales
cleanly at any size.

## Installation

```bash
dotnet add package ColombiaIcons.Blazor
```

## Usage

Add the icons namespace to your `_Imports.razor`:

```razor
@using ColombiaIcons.Blazor.Icons
```

Then use any icon component:

```razor
<Check />
<Jaguar Size="32" />
<EstrellaLlena Size="48" Color="#FCD116" />
```

### Parameters

| Parameter | Type     | Default          | Description                                          |
| --------- | -------- | ---------------- | ---------------------------------------------------- |
| `Size`    | `string` | `"24"`           | Width and height (px or any CSS unit, e.g. `"2em"`). |
| `Color`   | `string` | `"currentColor"` | Stroke/fill color. Defaults to the inherited color.  |

Any additional attributes (`class`, `aria-*`, etc.) are forwarded to the root `<svg>` element.

## License

MIT
