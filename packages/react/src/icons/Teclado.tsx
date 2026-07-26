import { forwardRef } from 'react';
import type { IconProps } from '../types';

export const Teclado = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, color = 'currentColor', style, ...props }, ref) => (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
      style={{ color, ...style }}
      {...props}
      dangerouslySetInnerHTML={{ __html: "<rect x=\"2\" y=\"6\" width=\"20\" height=\"12\" rx=\"2\"/><path d=\"M6 10H6.01M10 10H10.01M14 10H14.01M18 10H18.01\"/><path d=\"M6 14H6.01M18 14H18.01\"/><path d=\"M9 14H15\"/>" }}
    />
  )
);

Teclado.displayName = 'Teclado';
