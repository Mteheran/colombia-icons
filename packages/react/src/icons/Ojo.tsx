import { forwardRef } from 'react';
import type { IconProps } from '../types';

export const Ojo = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, color = 'currentColor', style, ...props }, ref) => (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
      style={{ color, ...style }}
      {...props}
      dangerouslySetInnerHTML={{ __html: "<path d=\"M2 12C5.5 6.5 8.5 5 12 5C15.5 5 18.5 6.5 22 12C18.5 17.5 15.5 19 12 19C8.5 19 5.5 17.5 2 12Z\"/><circle cx=\"12\" cy=\"12\" r=\"3\"/>" }}
    />
  )
);

Ojo.displayName = 'Ojo';
