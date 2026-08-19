import { forwardRef } from 'react';
import type { IconProps } from '../types';

export const Calculadora = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, color = 'currentColor', style, ...props }, ref) => (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
      style={{ color, ...style }}
      {...props}
      dangerouslySetInnerHTML={{ __html: "<rect x=\"5\" y=\"2\" width=\"14\" height=\"20\" rx=\"2\"/><rect x=\"8\" y=\"5\" width=\"8\" height=\"3\" rx=\"0.5\"/><path d=\"M8.5 12h.01\"/><path d=\"M12 12h.01\"/><path d=\"M15.5 12h.01\"/><path d=\"M8.5 15.5h.01\"/><path d=\"M12 15.5h.01\"/><path d=\"M15.5 15.5h.01\"/><path d=\"M8.5 19h.01\"/><path d=\"M12 19h.01\"/><path d=\"M15.5 19h.01\"/>" }}
    />
  )
);

Calculadora.displayName = 'Calculadora';
