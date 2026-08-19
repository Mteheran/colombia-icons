import { forwardRef } from 'react';
import type { IconProps } from '../types';

export const Laptop = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, color = 'currentColor', style, ...props }, ref) => (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
      style={{ color, ...style }}
      {...props}
      dangerouslySetInnerHTML={{ __html: "<rect x=\"5\" y=\"4\" width=\"14\" height=\"10\" rx=\"1.5\"/><path d=\"M5 14L2.7 18.6a1 1 0 0 0 .9 1.4H20.4a1 1 0 0 0 .9-1.4L19 14\"/>" }}
    />
  )
);

Laptop.displayName = 'Laptop';
