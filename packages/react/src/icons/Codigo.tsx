import { forwardRef } from 'react';
import type { IconProps } from '../types';

export const Codigo = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, color = 'currentColor', style, ...props }, ref) => (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
      style={{ color, ...style }}
      {...props}
      dangerouslySetInnerHTML={{ __html: "<rect x=\"3\" y=\"3.5\" width=\"18\" height=\"17\" rx=\"2\"/><path d=\"M10 8 6 12 10 16\"/><path d=\"M14 8 18 12 14 16\"/>" }}
    />
  )
);

Codigo.displayName = 'Codigo';
