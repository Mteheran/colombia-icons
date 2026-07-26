import { forwardRef } from 'react';
import type { IconProps } from '../types';

export const CandadoAbierto = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, color = 'currentColor', style, ...props }, ref) => (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
      style={{ color, ...style }}
      {...props}
      dangerouslySetInnerHTML={{ __html: "<path d=\"M8 11V7A4.5 4.5 0 0 1 16.5 6\"/><path d=\"M6 11H18V20H6Z\"/>" }}
    />
  )
);

CandadoAbierto.displayName = 'CandadoAbierto';
