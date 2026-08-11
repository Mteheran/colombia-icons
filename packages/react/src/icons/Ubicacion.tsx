import { forwardRef } from 'react';
import type { IconProps } from '../types';

export const Ubicacion = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, color = 'currentColor', style, ...props }, ref) => (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
      style={{ color, ...style }}
      {...props}
      dangerouslySetInnerHTML={{ __html: "<path d=\"M12 21C8 16.5 5 13.2 5 10A7 7 0 1 1 19 10C19 13.2 16 16.5 12 21Z\"/><circle cx=\"12\" cy=\"10\" r=\"3\"/>" }}
    />
  )
);

Ubicacion.displayName = 'Ubicacion';
