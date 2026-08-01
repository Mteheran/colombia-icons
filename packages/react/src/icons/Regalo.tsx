import { forwardRef } from 'react';
import type { IconProps } from '../types';

export const Regalo = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, color = 'currentColor', style, ...props }, ref) => (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
      style={{ color, ...style }}
      {...props}
      dangerouslySetInnerHTML={{ __html: "<rect x=\"3\" y=\"8\" width=\"18\" height=\"4\" rx=\"1\"/><path d=\"M5 12v6.5a1.5 1.5 0 0 0 1.5 1.5h11a1.5 1.5 0 0 0 1.5-1.5V12\"/><path d=\"M12 8v12\"/><path d=\"M12 8H7.5a2.5 2.5 0 0 1 0-5C11 3 12 8 12 8z\"/><path d=\"M12 8h4.5a2.5 2.5 0 0 0 0-5C13 3 12 8 12 8z\"/>" }}
    />
  )
);

Regalo.displayName = 'Regalo';
