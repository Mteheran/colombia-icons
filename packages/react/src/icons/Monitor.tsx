import { forwardRef } from 'react';
import type { IconProps } from '../types';

export const Monitor = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, color = 'currentColor', style, ...props }, ref) => (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
      style={{ color, ...style }}
      {...props}
      dangerouslySetInnerHTML={{ __html: "<rect x=\"2.5\" y=\"4\" width=\"19\" height=\"13\" rx=\"2\"/><path d=\"M12 17v3\"/><path d=\"M8 20h8\"/>" }}
    />
  )
);

Monitor.displayName = 'Monitor';
