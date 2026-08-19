import { forwardRef } from 'react';
import type { IconProps } from '../types';

export const Accesibilidad = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, color = 'currentColor', style, ...props }, ref) => (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
      style={{ color, ...style }}
      {...props}
      dangerouslySetInnerHTML={{ __html: "<circle cx=\"12\" cy=\"12\" r=\"9\"/><circle cx=\"12\" cy=\"7.5\" r=\"0.7\"/><path d=\"M10 16.5L12 13.5L14 16.5M12 13.5V11.5L15 10.5M9 10.5L12 11.5\"/>" }}
    />
  )
);

Accesibilidad.displayName = 'Accesibilidad';
