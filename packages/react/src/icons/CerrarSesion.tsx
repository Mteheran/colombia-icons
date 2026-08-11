import { forwardRef } from 'react';
import type { IconProps } from '../types';

export const CerrarSesion = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, color = 'currentColor', style, ...props }, ref) => (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
      style={{ color, ...style }}
      {...props}
      dangerouslySetInnerHTML={{ __html: "<path d=\"M9 3H5A2 2 0 0 0 3 5V19A2 2 0 0 0 5 21H9\"/><path d=\"M16 7L21 12L16 17\"/><path d=\"M21 12H9\"/>" }}
    />
  )
);

CerrarSesion.displayName = 'CerrarSesion';
