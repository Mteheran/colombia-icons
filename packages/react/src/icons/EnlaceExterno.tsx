import { forwardRef } from 'react';
import type { IconProps } from '../types';

export const EnlaceExterno = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, color = 'currentColor', style, ...props }, ref) => (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
      style={{ color, ...style }}
      {...props}
      dangerouslySetInnerHTML={{ __html: "<path d=\"M18 12V19A2 2 0 0 1 16 21H5A2 2 0 0 1 3 19V8A2 2 0 0 1 5 6H12\"/><path d=\"M20 4L11 13\"/><path d=\"M15 4H20V9\"/>" }}
    />
  )
);

EnlaceExterno.displayName = 'EnlaceExterno';
