import { forwardRef } from 'react';
import type { IconProps } from '../types';

export const Rehacer = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, color = 'currentColor', style, ...props }, ref) => (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
      style={{ color, ...style }}
      {...props}
      dangerouslySetInnerHTML={{ __html: "<path d=\"M20 8H9a5 5 0 0 0 0 10h6\"/><path d=\"M16 4l4 4-4 4\"/>" }}
    />
  )
);

Rehacer.displayName = 'Rehacer';
