import { forwardRef } from 'react';
import type { IconProps } from '../types';

export const Interruptor = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, color = 'currentColor', style, ...props }, ref) => (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
      style={{ color, ...style }}
      {...props}
      dangerouslySetInnerHTML={{ __html: "<rect x=\"2\" y=\"7\" width=\"20\" height=\"10\" rx=\"5\"/><circle cx=\"17\" cy=\"12\" r=\"2.5\"/>" }}
    />
  )
);

Interruptor.displayName = 'Interruptor';
