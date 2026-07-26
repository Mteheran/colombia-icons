import { forwardRef } from 'react';
import type { IconProps } from '../types';

export const Enter = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, color = 'currentColor', style, ...props }, ref) => (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
      style={{ color, ...style }}
      {...props}
      dangerouslySetInnerHTML={{ __html: "<path d=\"M19 5V11A4 4 0 0 1 15 15H6\"/><path d=\"M10 11 6 15 10 19\"/>" }}
    />
  )
);

Enter.displayName = 'Enter';
