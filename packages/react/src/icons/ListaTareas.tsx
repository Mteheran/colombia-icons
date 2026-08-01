import { forwardRef } from 'react';
import type { IconProps } from '../types';

export const ListaTareas = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, color = 'currentColor', style, ...props }, ref) => (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
      style={{ color, ...style }}
      {...props}
      dangerouslySetInnerHTML={{ __html: "<path d=\"M2.5 6 4 7.5 7 4\"/><path d=\"M2.5 12 4 13.5 7 10\"/><rect x=\"3\" y=\"16\" width=\"4\" height=\"4\" rx=\"1\"/><path d=\"M11 6h10\"/><path d=\"M11 12h10\"/><path d=\"M11 18h10\"/>" }}
    />
  )
);

ListaTareas.displayName = 'ListaTareas';
