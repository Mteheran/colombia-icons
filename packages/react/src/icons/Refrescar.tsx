import { forwardRef } from 'react';
import type { IconProps } from '../types';

export const Refrescar = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, color = 'currentColor', style, ...props }, ref) => (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
      style={{ color, ...style }}
      {...props}
      dangerouslySetInnerHTML={{ __html: "<path d=\"M20 11A8 8 0 0 0 5 8.5\"/><path d=\"M5 4V9H10\"/><path d=\"M4 13A8 8 0 0 0 19 15.5\"/><path d=\"M19 20V15H14\"/>" }}
    />
  )
);

Refrescar.displayName = 'Refrescar';
