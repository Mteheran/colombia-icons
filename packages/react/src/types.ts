import type { SVGProps } from 'react';

export interface IconProps extends SVGProps<SVGSVGElement> {
  /** Ancho y alto del ícono en px (o cualquier unidad CSS). Default: 24. */
  size?: number | string;
  /** Color del trazo/relleno. Default: 'currentColor' (hereda del texto). */
  color?: string;
}
