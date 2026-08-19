import { forwardRef } from 'react';
import type { IconProps } from '../types';

export const Servidor = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, color = 'currentColor', style, ...props }, ref) => (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
      style={{ color, ...style }}
      {...props}
      dangerouslySetInnerHTML={{ __html: "<rect x=\"3\" y=\"4\" width=\"18\" height=\"7\" rx=\"1.5\"/><rect x=\"3\" y=\"13\" width=\"18\" height=\"7\" rx=\"1.5\"/><path d=\"M7 7.5h.01\"/><path d=\"M7 16.5h.01\"/>" }}
    />
  )
);

Servidor.displayName = 'Servidor';
