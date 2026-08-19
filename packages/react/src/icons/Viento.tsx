import { forwardRef } from 'react';
import type { IconProps } from '../types';

export const Viento = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, color = 'currentColor', style, ...props }, ref) => (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
      style={{ color, ...style }}
      {...props}
      dangerouslySetInnerHTML={{ __html: "<path d=\"M9.8 4.4A2 2 0 1 1 11 8H2\"/><path d=\"M17.5 8a2.5 2.5 0 1 1 2 4H2\"/><path d=\"M12.8 19.6A2 2 0 1 0 14 16H2\"/>" }}
    />
  )
);

Viento.displayName = 'Viento';
