import { forwardRef } from 'react';
import type { IconProps } from '../types';

export const Arepa = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, color = 'currentColor', style, ...props }, ref) => (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
      style={{ color, ...style }}
      {...props}
      dangerouslySetInnerHTML={{ __html: "<ellipse cx=\"12\" cy=\"11\" rx=\"8\" ry=\"5\" /><path d=\"M4,11v2.9c0,2.3,3.6,4.1,8,4.1s8-1.8,8-4.1v-2.9\" /><path d=\"M8.5,11.8l6.9-1.1M10.7,13.8l5.1-.8M8.2,9.5l5.1-.8\" />" }}
    />
  )
);

Arepa.displayName = 'Arepa';
