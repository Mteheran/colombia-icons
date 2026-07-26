import { forwardRef } from 'react';
import type { IconProps } from '../types';

export const Eliminar = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, color = 'currentColor', style, ...props }, ref) => (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
      style={{ color, ...style }}
      {...props}
      dangerouslySetInnerHTML={{ __html: "<path d=\"M9 7V4H15V7 M5 7H19 M6 7L7 19H17L18 7 M10 10V16 M14 10V16\"/>" }}
    />
  )
);

Eliminar.displayName = 'Eliminar';
