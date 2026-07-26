import { forwardRef } from 'react';
import type { IconProps } from '../types';

export const Calendario = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, color = 'currentColor', style, ...props }, ref) => (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
      style={{ color, ...style }}
      {...props}
      dangerouslySetInnerHTML={{ __html: "<path d=\"M4 5H20V20H4Z M4 9H20 M8 3V6 M16 3V6\"/>" }}
    />
  )
);

Calendario.displayName = 'Calendario';
