import { forwardRef } from 'react';
import type { IconProps } from '../types';

export const Aleatorio = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, color = 'currentColor', style, ...props }, ref) => (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
      style={{ color, ...style }}
      {...props}
      dangerouslySetInnerHTML={{ __html: "<path d=\"M3 7H6A5 5 0 0 1 11 12A5 5 0 0 0 16 17H21\"/><path d=\"M21 7H16A5 5 0 0 0 13 8.2\"/><path d=\"M9 15.8A5 5 0 0 1 6 17H3\"/><path d=\"M18 4 21 7 18 10\"/><path d=\"M18 20 21 17 18 14\"/>" }}
    />
  )
);

Aleatorio.displayName = 'Aleatorio';
