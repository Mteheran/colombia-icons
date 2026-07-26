import { forwardRef } from 'react';
import type { IconProps } from '../types';

export const BombilloApagado = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, color = 'currentColor', style, ...props }, ref) => (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
      style={{ color, ...style }}
      {...props}
      dangerouslySetInnerHTML={{ __html: "<path d=\"M9 16A5 5 0 1 1 15 16A3.5 3.5 0 0 0 14 19A2 2 0 0 1 10 19A3.5 3.5 0 0 0 9 16Z\"/><path d=\"M9.7 17H14.3\"/>" }}
    />
  )
);

BombilloApagado.displayName = 'BombilloApagado';
