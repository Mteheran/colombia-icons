import { forwardRef } from 'react';
import type { IconProps } from '../types';

export const Bug = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, color = 'currentColor', style, ...props }, ref) => (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
      style={{ color, ...style }}
      {...props}
      dangerouslySetInnerHTML={{ __html: "<rect x=\"8\" y=\"7\" width=\"8\" height=\"12\" rx=\"4\"/><path d=\"M12 7.5V18.5\"/><path d=\"M10 7L8.5 4.5\"/><path d=\"M14 7L15.5 4.5\"/><path d=\"M8 10L4.5 8\"/><path d=\"M8 13H4\"/><path d=\"M8 16L4.5 18\"/><path d=\"M16 10L19.5 8\"/><path d=\"M16 13H20\"/><path d=\"M16 16L19.5 18\"/>" }}
    />
  )
);

Bug.displayName = 'Bug';
