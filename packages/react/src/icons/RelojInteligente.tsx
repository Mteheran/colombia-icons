import { forwardRef } from 'react';
import type { IconProps } from '../types';

export const RelojInteligente = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, color = 'currentColor', style, ...props }, ref) => (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
      style={{ color, ...style }}
      {...props}
      dangerouslySetInnerHTML={{ __html: "<rect x=\"6\" y=\"6\" width=\"12\" height=\"12\" rx=\"3\"/><path d=\"M9 6V3.5h6V6\"/><path d=\"M9 18v2.5h6V18\"/><path d=\"M18 10.5h1.5\"/>" }}
    />
  )
);

RelojInteligente.displayName = 'RelojInteligente';
