import { forwardRef } from 'react';
import type { IconProps } from '../types';

export const Descargar = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, color = 'currentColor', style, ...props }, ref) => (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
      style={{ color, ...style }}
      {...props}
      dangerouslySetInnerHTML={{ __html: "<path d=\"M12 4V15M7 10L12 15L17 10\"/><path d=\"M5 19H19\"/>" }}
    />
  )
);

Descargar.displayName = 'Descargar';
