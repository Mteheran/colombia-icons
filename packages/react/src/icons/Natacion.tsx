import { forwardRef } from 'react';
import type { IconProps } from '../types';

export const Natacion = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, color = 'currentColor', style, ...props }, ref) => (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
      style={{ color, ...style }}
      {...props}
      dangerouslySetInnerHTML={{ __html: "<circle cx=\"15.8\" cy=\"9.3\" r=\"1.2\"/><path d=\"M6.5 11.8 10.5 9 14 12 9.5 14.5\"/><path d=\"M3 17Q4.5 15.7 6 17T9 17T12 17T15 17T18 17T21 17\"/>" }}
    />
  )
);

Natacion.displayName = 'Natacion';
