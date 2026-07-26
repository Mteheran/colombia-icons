import { forwardRef } from 'react';
import type { IconProps } from '../types';

export const MarCaribe = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, color = 'currentColor', style, ...props }, ref) => (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
      style={{ color, ...style }}
      {...props}
      dangerouslySetInnerHTML={{ __html: "<path d=\"M8.5 12.5A3.5 3.5 0 0 1 15.5 12.5\"/><path d=\"M12 5V6.5M7.4 7L8.4 8M16.6 7L15.6 8M5 11.2H6.3M17.7 11.2H19\"/><path d=\"M3 15Q6 13.8 9 15T15 15T21 15\"/><path d=\"M3 18.5Q6 17.3 9 18.5T15 18.5T21 18.5\"/>" }}
    />
  )
);

MarCaribe.displayName = 'MarCaribe';
