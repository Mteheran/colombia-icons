# ColombiaIcons.Blazor

[![NuGet](https://img.shields.io/nuget/v/ColombiaIcons.Blazor?logo=nuget&label=NuGet)](https://www.nuget.org/packages/ColombiaIcons.Blazor)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/Mteheran/colombia-icons/blob/main/LICENSE)

Line-icon (outline, minimalist) components for Blazor, inspired by Colombia — part of the
[colombia-icons](https://github.com/Mteheran/colombia-icons) project.

Every icon is a 24×24 SVG drawn with a 1.5px stroke and `stroke="currentColor"`, so it inherits
color from CSS and scales cleanly at any size. The set spans generic UI icons plus Colombian
nature, culture, gastronomy, and sports.

Each icon is a strongly-typed Razor component (`<Condor />`, `<Check />`, `<Arepa />`), packaged as
a Razor Class Library targeting **.NET 10** — no JavaScript, no runtime dependencies beyond
`Microsoft.AspNetCore.Components.Web`.

Browse and search the full icon set at the
[gallery site](https://mteheran.github.io/colombia-icons/).

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
