import { forwardRef } from 'react';
import type { IconProps } from '../types';

export const Comentario = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, color = 'currentColor', style, ...props }, ref) => (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
      style={{ color, ...style }}
      {...props}
      dangerouslySetInnerHTML={{ __html: "<path d=\"M3 13.5A2.5 2.5 0 0 0 5.5 16H16L21 20V6.5A2.5 2.5 0 0 0 18.5 4H5.5A2.5 2.5 0 0 0 3 6.5Z\"/>" }}
    />
  )
);

Comentario.displayName = 'Comentario';
