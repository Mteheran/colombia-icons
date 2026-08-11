import { forwardRef } from 'react';
import type { IconProps } from '../types';

export const NubeDescargar = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, color = 'currentColor', style, ...props }, ref) => (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
      style={{ color, ...style }}
      {...props}
      dangerouslySetInnerHTML={{ __html: "<path d=\"M7 15.5a4.5 4.5 0 0 1 1.6 -8.7a4.2 4.2 0 0 1 7.8 1.1a3.3 3.3 0 0 1 1 6.5\" /><path d=\"M12 12v7M9 16l3 3 3-3\" />" }}
    />
  )
);

NubeDescargar.displayName = 'NubeDescargar';
