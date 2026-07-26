import { forwardRef } from 'react';
import type { IconProps } from '../types';

export const Carpeta = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, color = 'currentColor', style, ...props }, ref) => (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
      style={{ color, ...style }}
      {...props}
      dangerouslySetInnerHTML={{ __html: "<path d=\"M5.5 5H9L11 7H18.5A1.5 1.5 0 0 1 20 8.5V17.5A1.5 1.5 0 0 1 18.5 19H5.5A1.5 1.5 0 0 1 4 17.5V6.5A1.5 1.5 0 0 1 5.5 5Z M9.5 5H16.5A1.5 1.5 0 0 1 18 6.5V7\"/>" }}
    />
  )
);

Carpeta.displayName = 'Carpeta';
