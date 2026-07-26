import { forwardRef } from 'react';
import type { IconProps } from '../types';

export const Controles = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, color = 'currentColor', style, ...props }, ref) => (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
      style={{ color, ...style }}
      {...props}
      dangerouslySetInnerHTML={{ __html: "<path d=\"M4 6H15\"/><circle cx=\"17\" cy=\"6\" r=\"2\"/><circle cx=\"7\" cy=\"12\" r=\"2\"/><path d=\"M9 12H20\"/><path d=\"M4 18H15\"/><circle cx=\"17\" cy=\"18\" r=\"2\"/>" }}
    />
  )
);

Controles.displayName = 'Controles';
