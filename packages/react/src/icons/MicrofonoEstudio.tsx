import { forwardRef } from 'react';
import type { IconProps } from '../types';

export const MicrofonoEstudio = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, color = 'currentColor', style, ...props }, ref) => (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
      style={{ color, ...style }}
      {...props}
      dangerouslySetInnerHTML={{ __html: "<rect x=\"8.5\" y=\"2.5\" width=\"7\" height=\"13\" rx=\"3.5\"/><path d=\"M11 5.5H13\"/><path d=\"M11 8H13\"/><path d=\"M11 10.5H13\"/><path d=\"M12 15.5V19\"/><path d=\"M8.5 19H15.5\"/>" }}
    />
  )
);

MicrofonoEstudio.displayName = 'MicrofonoEstudio';
