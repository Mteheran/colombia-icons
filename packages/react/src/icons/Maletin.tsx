import { forwardRef } from 'react';
import type { IconProps } from '../types';

export const Maletin = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, color = 'currentColor', style, ...props }, ref) => (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
      style={{ color, ...style }}
      {...props}
      dangerouslySetInnerHTML={{ __html: "<rect x=\"3\" y=\"7\" width=\"18\" height=\"13\" rx=\"2\"/><path d=\"M9 7V5.5A2 2 0 0 1 11 3.5H13A2 2 0 0 1 15 5.5V7\"/><path d=\"M3 13H21\"/><rect x=\"10.5\" y=\"11.75\" width=\"3\" height=\"2.5\" rx=\"0.5\"/>" }}
    />
  )
);

Maletin.displayName = 'Maletin';
