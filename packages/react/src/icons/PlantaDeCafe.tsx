import { forwardRef } from 'react';
import type { IconProps } from '../types';

export const PlantaDeCafe = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, color = 'currentColor', style, ...props }, ref) => (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
      style={{ color, ...style }}
      {...props}
      dangerouslySetInnerHTML={{ __html: "<path d=\"M10 20 c1.1 -2.4 2 -5.2 2.5 -8.2 c0.5 -2.8 1.8 -7.02 3.3 -8.52\"/><path d=\"M12.9 8.4 c-1.6 -1.7 -1.31 -4.09 -3.11 -3.79 c0.4 2 -1.32 4.79 1.08 5.49\"/><path d=\"M14 7.2 c1.2 -1.7 4.57 -1.07 4.57 -1.07 c0 0 0.03 2.14 -2.17 3.04\"/><path d=\"M11.5 13.1 c-1.8 -1.5 -3.24 -3.49 -4.94 -2.79 c0.7 1.9 0.87 4.89 3.17 5.19\"/><path d=\"M12.6 14.5 c1.79 -0.23 4.28 -1.8 6 -2.5 c-0.37 3.16 -2.29 5.66 -4.9 4.5\"/><path d=\"M15.4 10.9 c0 -0.6 -0.5 -1.09 -1.1 -1.09 c-0.6 0 -1.1 0.5 -1.1 1.1 c0 0.6 0.5 1.1 1.1 1.1 c0.6 0 1.1 -0.49 1.1 -1.09\"/>" }}
    />
  )
);

PlantaDeCafe.displayName = 'PlantaDeCafe';
