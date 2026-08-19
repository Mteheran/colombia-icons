import { forwardRef } from 'react';
import type { IconProps } from '../types';

export const Mouse = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, color = 'currentColor', style, ...props }, ref) => (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
      style={{ color, ...style }}
      {...props}
      dangerouslySetInnerHTML={{ __html: "<rect x=\"6\" y=\"2\" width=\"12\" height=\"20\" rx=\"6\"/><path d=\"M12 6v4\"/>" }}
    />
  )
);

Mouse.displayName = 'Mouse';
