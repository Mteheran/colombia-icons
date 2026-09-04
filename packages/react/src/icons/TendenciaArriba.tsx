import { forwardRef } from 'react';
import type { IconProps } from '../types';

export const TendenciaArriba = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, color = 'currentColor', style, ...props }, ref) => (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
      style={{ color, ...style }}
      {...props}
      dangerouslySetInnerHTML={{ __html: "<path d=\"M4 16.5 9.5 11 13 14.5 20 7.5\"/><path d=\"M15 7.5H20V12.5\"/>" }}
    />
  )
);

TendenciaArriba.displayName = 'TendenciaArriba';
