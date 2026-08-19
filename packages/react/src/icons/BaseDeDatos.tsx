import { forwardRef } from 'react';
import type { IconProps } from '../types';

export const BaseDeDatos = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, color = 'currentColor', style, ...props }, ref) => (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
      style={{ color, ...style }}
      {...props}
      dangerouslySetInnerHTML={{ __html: "<ellipse cx=\"12\" cy=\"5\" rx=\"8\" ry=\"3\"/><path d=\"M4 5v14a8 3 0 0 0 16 0V5\"/><path d=\"M4 12a8 3 0 0 0 16 0\"/>" }}
    />
  )
);

BaseDeDatos.displayName = 'BaseDeDatos';
