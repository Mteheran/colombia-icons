import { forwardRef } from 'react';
import type { IconProps } from '../types';

export const Gota = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, color = 'currentColor', style, ...props }, ref) => (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
      style={{ color, ...style }}
      {...props}
      dangerouslySetInnerHTML={{ __html: "<path d=\"M6.8 11A6 6 0 1 0 17.2 11L12 3Z\"/>" }}
    />
  )
);

Gota.displayName = 'Gota';
