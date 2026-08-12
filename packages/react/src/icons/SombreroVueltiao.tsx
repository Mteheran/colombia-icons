import { forwardRef } from 'react';
import type { IconProps } from '../types';

export const SombreroVueltiao = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, color = 'currentColor', style, ...props }, ref) => (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
      style={{ color, ...style }}
      {...props}
      dangerouslySetInnerHTML={{ __html: "<polyline points=\"7 13.6 7.2 6.6 15.6 6.6 15.9 9.6\"/><path d=\"M7.1 11.3c-3.7-.2-5.3.9-5.6 2.5s-.5 1.7.5 2.8c.9 1.1 2.9 1.4 4.7.4 2.8-1.4 10-5.6 13.2-5\"/><path d=\"M15.3 12.8c1.6 1.8 7.6 3.2 7.4-1-.1-2.1-2-3.9-5.3-2.5-3.1 1.4-1.9.9-6.7 2.9\"/><line x1=\"7.4\" y1=\"9.3\" x2=\"12\" y2=\"9.3\"/><line x1=\"7.7\" y1=\"11.3\" x2=\"8.9\" y2=\"11.3\"/><line x1=\"13.5\" y1=\"13.6\" x2=\"16.3\" y2=\"13.6\"/><line x1=\"4.2\" y1=\"15.1\" x2=\"8.7\" y2=\"13.3\"/>" }}
    />
  )
);

SombreroVueltiao.displayName = 'SombreroVueltiao';
