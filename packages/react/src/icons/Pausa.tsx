import { forwardRef } from 'react';
import type { IconProps } from '../types';

export const Pausa = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, color = 'currentColor', style, ...props }, ref) => (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
      style={{ color, ...style }}
      {...props}
      dangerouslySetInnerHTML={{ __html: "<rect x=\"8\" y=\"5\" width=\"3\" height=\"14\" rx=\"1.5\"/><rect x=\"13\" y=\"5\" width=\"3\" height=\"14\" rx=\"1.5\"/>" }}
    />
  )
);

Pausa.displayName = 'Pausa';
