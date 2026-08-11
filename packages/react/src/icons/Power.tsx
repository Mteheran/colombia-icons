import { forwardRef } from 'react';
import type { IconProps } from '../types';

export const Power = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, color = 'currentColor', style, ...props }, ref) => (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
      style={{ color, ...style }}
      {...props}
      dangerouslySetInnerHTML={{ __html: "<path d=\"M12 3V12\"/><path d=\"M18.4 6.6A9 9 0 1 1 5.6 6.6\"/>" }}
    />
  )
);

Power.displayName = 'Power';
