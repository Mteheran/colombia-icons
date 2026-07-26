import { forwardRef } from 'react';
import type { IconProps } from '../types';

export const Terminal = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, color = 'currentColor', style, ...props }, ref) => (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
      style={{ color, ...style }}
      {...props}
      dangerouslySetInnerHTML={{ __html: "<rect x=\"3\" y=\"3.5\" width=\"18\" height=\"17\" rx=\"2\"/><path d=\"M7.5 9 10.5 12 7.5 15\"/><path d=\"M12.5 15H16.5\"/>" }}
    />
  )
);

Terminal.displayName = 'Terminal';
