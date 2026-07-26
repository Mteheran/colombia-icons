import { forwardRef } from 'react';
import type { IconProps } from '../types';

export const ArbolTropical = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, color = 'currentColor', style, ...props }, ref) => (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
      style={{ color, ...style }}
      {...props}
      dangerouslySetInnerHTML={{ __html: "<path d=\"M9.8 16A3 3 0 0 1 7.05 12.3A3 3 0 0 1 7.35 7.45A3 3 0 0 1 12 3.75A3 3 0 0 1 16.6 7.45A3 3 0 0 1 16.9 12.3A3 3 0 0 1 14 16H9.8Z\"/><path d=\"M12 21V8.5\"/><path d=\"M12 13.5 9.9 11.4M12 12 14.1 9.9\"/>" }}
    />
  )
);

ArbolTropical.displayName = 'ArbolTropical';
