import { forwardRef } from 'react';
import type { IconProps } from '../types';

export const CarpetaAbierta = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, color = 'currentColor', style, ...props }, ref) => (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
      style={{ color, ...style }}
      {...props}
      dangerouslySetInnerHTML={{ __html: "<path d=\"M5.5 19 8 12.35A1.5 1.5 0 0 1 9.4 11.35H19.8A1.5 1.5 0 0 1 21.24 13.25L20.14 17.45A2 2 0 0 1 18.24 19H5.5A1.5 1.5 0 0 1 4 17.5V6.5A1.5 1.5 0 0 1 5.5 5H9L11 7H18.5A1.5 1.5 0 0 1 20 8.5V11.35\"/>" }}
    />
  )
);

CarpetaAbierta.displayName = 'CarpetaAbierta';
