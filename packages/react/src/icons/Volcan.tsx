import { forwardRef } from 'react';
import type { IconProps } from '../types';

export const Volcan = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, color = 'currentColor', style, ...props }, ref) => (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
      style={{ color, ...style }}
      {...props}
      dangerouslySetInnerHTML={{ __html: "<path d=\"M3.5 19.5C4.5 15.5 6 12.5 8 10L10.5 12H13.5L16 10C18 12.5 19.5 15.5 20.5 19.5Q12 21.2 3.5 19.5Z\"/><path d=\"M10.3 10.5L9.3 5.5M12 11V4.5M13.7 10.5L14.7 5.5\"/>" }}
    />
  )
);

Volcan.displayName = 'Volcan';
