import { forwardRef } from 'react';
import type { IconProps } from '../types';

export const Subir = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, color = 'currentColor', style, ...props }, ref) => (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
      style={{ color, ...style }}
      {...props}
      dangerouslySetInnerHTML={{ __html: "<path d=\"M12 15V4M7 9L12 4L17 9\"/><path d=\"M5 19H19\"/>" }}
    />
  )
);

Subir.displayName = 'Subir';
