import { forwardRef } from 'react';
import type { IconProps } from '../types';

export const FlechaArriba = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, color = 'currentColor', style, ...props }, ref) => (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
      style={{ color, ...style }}
      {...props}
      dangerouslySetInnerHTML={{ __html: "<path d=\"M12 20V4\"/><path d=\"M5 11 12 4 19 11\"/>" }}
    />
  )
);

FlechaArriba.displayName = 'FlechaArriba';
