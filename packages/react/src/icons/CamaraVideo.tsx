import { forwardRef } from 'react';
import type { IconProps } from '../types';

export const CamaraVideo = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, color = 'currentColor', style, ...props }, ref) => (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
      style={{ color, ...style }}
      {...props}
      dangerouslySetInnerHTML={{ __html: "<rect x=\"2.5\" y=\"6.5\" width=\"13\" height=\"11\" rx=\"2\"/><path d=\"M15.5 13.5 21.5 16V8L15.5 10.5\"/>" }}
    />
  )
);

CamaraVideo.displayName = 'CamaraVideo';
