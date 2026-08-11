import { forwardRef } from 'react';
import type { IconProps } from '../types';

export const Enlace = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, color = 'currentColor', style, ...props }, ref) => (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
      style={{ color, ...style }}
      {...props}
      dangerouslySetInnerHTML={{ __html: "<path d=\"M10 17H7A5 5 0 0 1 7 7H10\"/><path d=\"M14 7H17A5 5 0 0 1 17 17H14\"/><path d=\"M8 12H16\"/>" }}
    />
  )
);

Enlace.displayName = 'Enlace';
