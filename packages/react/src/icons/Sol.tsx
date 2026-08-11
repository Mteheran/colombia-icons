import { forwardRef } from 'react';
import type { IconProps } from '../types';

export const Sol = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, color = 'currentColor', style, ...props }, ref) => (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
      style={{ color, ...style }}
      {...props}
      dangerouslySetInnerHTML={{ __html: "<circle cx=\"12\" cy=\"12\" r=\"4\"/><path d=\"M12 4V6\"/><path d=\"M12 18V20\"/><path d=\"M4 12H6\"/><path d=\"M18 12H20\"/><path d=\"M6.34 6.34L7.76 7.76\"/><path d=\"M17.66 6.34L16.24 7.76\"/><path d=\"M6.34 17.66L7.76 16.24\"/><path d=\"M17.66 17.66L16.24 16.24\"/>" }}
    />
  )
);

Sol.displayName = 'Sol';
