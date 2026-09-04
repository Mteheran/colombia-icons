import { forwardRef } from 'react';
import type { IconProps } from '../types';

export const Historial = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, color = 'currentColor', style, ...props }, ref) => (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
      style={{ color, ...style }}
      {...props}
      dangerouslySetInnerHTML={{ __html: "<path d=\"M4.5 9.3A8 8 0 1 1 4.5 14.7\"/><path d=\"M4.5 19.7V14.7H9.5\"/><path d=\"M12 12V6M12 12L16 16\"/>" }}
    />
  )
);

Historial.displayName = 'Historial';
