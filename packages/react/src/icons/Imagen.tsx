import { forwardRef } from 'react';
import type { IconProps } from '../types';

export const Imagen = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, color = 'currentColor', style, ...props }, ref) => (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
      style={{ color, ...style }}
      {...props}
      dangerouslySetInnerHTML={{ __html: "<rect x=\"3\" y=\"3\" width=\"18\" height=\"18\" rx=\"2\"/><path d=\"M8.5 8.5H8.51\"/><path d=\"M4 17 9.5 11.5C10.3 10.7 11.3 10.7 12.1 11.5L20 19.4\"/>" }}
    />
  )
);

Imagen.displayName = 'Imagen';
