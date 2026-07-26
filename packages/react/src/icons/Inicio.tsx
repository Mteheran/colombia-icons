import { forwardRef } from 'react';
import type { IconProps } from '../types';

export const Inicio = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, color = 'currentColor', style, ...props }, ref) => (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
      style={{ color, ...style }}
      {...props}
      dangerouslySetInnerHTML={{ __html: "<path d=\"M3 10.5 12 3 21 10.5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19Z\"/><path d=\"M14.8 21V14.5A1.5 1.5 0 0 0 13.3 13H10.7A1.5 1.5 0 0 0 9.2 14.5V21\"/>" }}
    />
  )
);

Inicio.displayName = 'Inicio';
