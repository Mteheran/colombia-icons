import { forwardRef } from 'react';
import type { IconProps } from '../types';

export const Guardar = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, color = 'currentColor', style, ...props }, ref) => (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
      style={{ color, ...style }}
      {...props}
      dangerouslySetInnerHTML={{ __html: "<path d=\"M6 4H16L19 7V20H6Z M9 4V9H15V4 M13 4V7 M9 20V13H15V20\"/>" }}
    />
  )
);

Guardar.displayName = 'Guardar';
