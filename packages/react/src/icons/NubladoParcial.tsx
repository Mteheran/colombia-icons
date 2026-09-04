import { forwardRef } from 'react';
import type { IconProps } from '../types';

export const NubladoParcial = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, color = 'currentColor', style, ...props }, ref) => (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
      style={{ color, ...style }}
      {...props}
      dangerouslySetInnerHTML={{ __html: "<path d=\"M10.59 10.12A3.6 3.6 0 0 1 15.68 15.21\"/><path d=\"M10.98 8.04 10.26 6.5\"/><path d=\"M16.74 9.06 17.94 7.86\"/><path d=\"M17.76 14.82 19.3 15.54\"/><g transform=\"translate(8.3 15.7) scale(0.76) translate(-11.35 -13.35)\" stroke-width=\"1.97\"><path d=\"M6.8 18a4.8 4.8 0 1 1 1.7 -9.2a4.2 4.2 0 0 1 7.8 1.1a3.5 3.5 0 0 1 -0.3 8.1Z\"/></g>" }}
    />
  )
);

NubladoParcial.displayName = 'NubladoParcial';
