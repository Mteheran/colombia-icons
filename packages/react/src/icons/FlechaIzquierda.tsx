import { forwardRef } from 'react';
import type { IconProps } from '../types';

export const FlechaIzquierda = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, color = 'currentColor', style, ...props }, ref) => (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
      style={{ color, ...style }}
      {...props}
      dangerouslySetInnerHTML={{ __html: "<path d=\"M20 12H4\"/><path d=\"M11 19 4 12 11 5\"/>" }}
    />
  )
);

FlechaIzquierda.displayName = 'FlechaIzquierda';
