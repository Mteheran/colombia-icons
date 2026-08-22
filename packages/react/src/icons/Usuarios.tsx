import { forwardRef } from 'react';
import type { IconProps } from '../types';

export const Usuarios = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, color = 'currentColor', style, ...props }, ref) => (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
      style={{ color, ...style }}
      {...props}
      dangerouslySetInnerHTML={{ __html: "<circle cx=\"9.5\" cy=\"8\" r=\"3.5\"/><path d=\"M3 20V18A6.5 6.5 0 0 1 16 18V20Z\"/><path d=\"M12 5.55A3.5 3.5 0 1 1 14.5 11.5A6.5 6.5 0 0 1 21 18V20\"/>" }}
    />
  )
);

Usuarios.displayName = 'Usuarios';
