import { forwardRef } from 'react';
import type { IconProps } from '../types';

export const BombilloEncendido = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, color = 'currentColor', style, ...props }, ref) => (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
      style={{ color, ...style }}
      {...props}
      dangerouslySetInnerHTML={{ __html: "<path d=\"M3 12H4M12 3V4M20 12H21M5.6 5.6 6.3 6.3M18.4 5.6 17.7 6.3\"/><path d=\"M9 16A5 5 0 1 1 15 16A3.5 3.5 0 0 0 14 19A2 2 0 0 1 10 19A3.5 3.5 0 0 0 9 16Z\"/><path d=\"M9.7 17H14.3\"/>" }}
    />
  )
);

BombilloEncendido.displayName = 'BombilloEncendido';
