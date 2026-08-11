import { forwardRef } from 'react';
import type { IconProps } from '../types';

export const Carrito = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, color = 'currentColor', style, ...props }, ref) => (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
      style={{ color, ...style }}
      {...props}
      dangerouslySetInnerHTML={{ __html: "<path d=\"M2.5 3.5H5L7.5 15H18.5L20.5 7H6.2\"/><circle cx=\"9\" cy=\"18.5\" r=\"1.4\"/><circle cx=\"17.5\" cy=\"18.5\" r=\"1.4\"/>" }}
    />
  )
);

Carrito.displayName = 'Carrito';
