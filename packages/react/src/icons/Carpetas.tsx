import { forwardRef } from 'react';
import type { IconProps } from '../types';

export const Carpetas = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, color = 'currentColor', style, ...props }, ref) => (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
      style={{ color, ...style }}
      {...props}
      dangerouslySetInnerHTML={{ __html: "<path d=\"M3 10H6V12H14V21H3Z M6 7H9V9H17V17 M9 4H12V6H20V14\"/>" }}
    />
  )
);

Carpetas.displayName = 'Carpetas';
