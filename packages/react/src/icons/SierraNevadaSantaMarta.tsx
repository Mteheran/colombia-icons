import { forwardRef } from 'react';
import type { IconProps } from '../types';

export const SierraNevadaSantaMarta = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, color = 'currentColor', style, ...props }, ref) => (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
      style={{ color, ...style }}
      {...props}
      dangerouslySetInnerHTML={{ __html: "<path d=\"M2.21 17.34l3.56 -5.34l1.96 2.23\"/><path d=\"M7.73 14.23l4.27 -7.56l4.27 7.57\"/><path d=\"M16.27 14.23l1.96 -2.22l3.56 5.34\"/><path d=\"M9.51 11.08c0.8 -0.89 4.19 -0.89 4.99 0\"/><path d=\"M5.24 17.34c1.34 -0.62 2.67 -0.62 4.01 0\"/><path d=\"M14.76 17.34c1.34 -0.62 2.67 -0.62 4.01 0\"/>" }}
    />
  )
);

SierraNevadaSantaMarta.displayName = 'SierraNevadaSantaMarta';
