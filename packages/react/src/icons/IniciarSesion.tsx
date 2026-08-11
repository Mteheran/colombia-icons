import { forwardRef } from 'react';
import type { IconProps } from '../types';

export const IniciarSesion = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, color = 'currentColor', style, ...props }, ref) => (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
      style={{ color, ...style }}
      {...props}
      dangerouslySetInnerHTML={{ __html: "<path d=\"M15 3H19A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H15\"/><path d=\"M10 7L15 12L10 17\"/><path d=\"M15 12H3\"/>" }}
    />
  )
);

IniciarSesion.displayName = 'IniciarSesion';
