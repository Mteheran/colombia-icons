import { forwardRef } from 'react';
import type { IconProps } from '../types';

export const Marcador = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, color = 'currentColor', style, ...props }, ref) => (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
      style={{ color, ...style }}
      {...props}
      dangerouslySetInnerHTML={{ __html: "<path d=\"M6 20V6A2 2 0 0 1 8 4H16A2 2 0 0 1 18 6V20L12 16.5Z\"/>" }}
    />
  )
);

Marcador.displayName = 'Marcador';
