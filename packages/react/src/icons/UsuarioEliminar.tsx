import { forwardRef } from 'react';
import type { IconProps } from '../types';

export const UsuarioEliminar = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, color = 'currentColor', style, ...props }, ref) => (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
      style={{ color, ...style }}
      {...props}
      dangerouslySetInnerHTML={{ __html: "<circle cx=\"9\" cy=\"8\" r=\"3.5\"/><path d=\"M2.5 20V18A6.5 6.5 0 0 1 15.5 18V20Z\"/><path d=\"M16 5 22 11\"/><path d=\"M22 5 16 11\"/>" }}
    />
  )
);

UsuarioEliminar.displayName = 'UsuarioEliminar';
