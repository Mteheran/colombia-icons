import { forwardRef } from 'react';
import type { IconProps } from '../types';

export const Archivo = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, color = 'currentColor', style, ...props }, ref) => (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
      style={{ color, ...style }}
      {...props}
      dangerouslySetInnerHTML={{ __html: "<path d=\"M5 4H15L19 8V19H5Z M15 4V8H19 M8 10H16 M8 13H16 M8 16H14\"/>" }}
    />
  )
);

Archivo.displayName = 'Archivo';
