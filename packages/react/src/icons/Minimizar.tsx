import { forwardRef } from 'react';
import type { IconProps } from '../types';

export const Minimizar = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, color = 'currentColor', style, ...props }, ref) => (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
      style={{ color, ...style }}
      {...props}
      dangerouslySetInnerHTML={{ __html: "<path d=\"M8 3V6A2 2 0 0 1 6 8H3\"/><path d=\"M21 8H18A2 2 0 0 1 16 6V3\"/><path d=\"M3 16H6A2 2 0 0 1 8 18V21\"/><path d=\"M16 21V18A2 2 0 0 1 18 16H21\"/>" }}
    />
  )
);

Minimizar.displayName = 'Minimizar';
