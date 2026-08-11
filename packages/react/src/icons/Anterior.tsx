import { forwardRef } from 'react';
import type { IconProps } from '../types';

export const Anterior = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, color = 'currentColor', style, ...props }, ref) => (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
      style={{ color, ...style }}
      {...props}
      dangerouslySetInnerHTML={{ __html: "<path d=\"M4 6v12\" /><path d=\"M20 6l-7 6 7 6ZM13 6l-7 6 7 6Z\" />" }}
    />
  )
);

Anterior.displayName = 'Anterior';
