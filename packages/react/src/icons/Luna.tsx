import { forwardRef } from 'react';
import type { IconProps } from '../types';

export const Luna = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, color = 'currentColor', style, ...props }, ref) => (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
      style={{ color, ...style }}
      {...props}
      dangerouslySetInnerHTML={{ __html: "<path d=\"M12 3A6 6 0 0 0 21 12A9 9 0 1 1 12 3Z\"/>" }}
    />
  )
);

Luna.displayName = 'Luna';
