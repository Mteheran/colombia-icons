import { forwardRef } from 'react';
import type { IconProps } from '../types';

export const Puntero = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, color = 'currentColor', style, ...props }, ref) => (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
      style={{ color, ...style }}
      {...props}
      dangerouslySetInnerHTML={{ __html: "<path d=\"M6.3 3V19.1L10.5 15 12.9 21 16 20.1 13.6 14.1H17.7Z\"/>" }}
    />
  )
);

Puntero.displayName = 'Puntero';
