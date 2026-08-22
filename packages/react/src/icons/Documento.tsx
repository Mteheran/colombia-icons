import { forwardRef } from 'react';
import type { IconProps } from '../types';

export const Documento = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, color = 'currentColor', style, ...props }, ref) => (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
      style={{ color, ...style }}
      {...props}
      dangerouslySetInnerHTML={{ __html: "<rect x=\"5\" y=\"3\" width=\"14\" height=\"18\" rx=\"2\"/><path d=\"M9 7.5h6\"/><path d=\"M9 11h6\"/><path d=\"M9 14.5h6\"/><path d=\"M9 18h3.5\"/>" }}
    />
  )
);

Documento.displayName = 'Documento';
