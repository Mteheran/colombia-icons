import { forwardRef } from 'react';
import type { IconProps } from '../types';

export const Deshacer = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, color = 'currentColor', style, ...props }, ref) => (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
      style={{ color, ...style }}
      {...props}
      dangerouslySetInnerHTML={{ __html: "<path d=\"M4 8h11a5 5 0 0 1 0 10H9\"/><path d=\"M8 4 4 8l4 4\"/>" }}
    />
  )
);

Deshacer.displayName = 'Deshacer';
