import { forwardRef } from 'react';
import type { IconProps } from '../types';

export const Volumen = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, color = 'currentColor', style, ...props }, ref) => (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
      style={{ color, ...style }}
      {...props}
      dangerouslySetInnerHTML={{ __html: "<path d=\"M3 10H6L11 5V19L6 14H3Z\"/><path d=\"M15 9A4 4 0 0 1 15 15\"/><path d=\"M18 6A9 9 0 0 1 18 18\"/>" }}
    />
  )
);

Volumen.displayName = 'Volumen';
