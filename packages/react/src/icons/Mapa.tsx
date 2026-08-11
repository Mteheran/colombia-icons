import { forwardRef } from 'react';
import type { IconProps } from '../types';

export const Mapa = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, color = 'currentColor', style, ...props }, ref) => (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
      style={{ color, ...style }}
      {...props}
      dangerouslySetInnerHTML={{ __html: "<path d=\"M9 4L3 6v14l6 -2 6 2 6 -2V4l-6 2z\" /><path d=\"M9 4v14M15 6v14\" />" }}
    />
  )
);

Mapa.displayName = 'Mapa';
