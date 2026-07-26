import { forwardRef } from 'react';
import type { IconProps } from '../types';

export const Arepa = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, color = 'currentColor', style, ...props }, ref) => (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
      style={{ color, ...style }}
      {...props}
      dangerouslySetInnerHTML={{ __html: "<circle cx=\"12\" cy=\"12\" r=\"8\"/><path d=\"M9 9 15 15M7.7 11.9 12.1 16.3M11.9 7.7 16.3 12.1\"/>" }}
    />
  )
);

Arepa.displayName = 'Arepa';
