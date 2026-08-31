import { forwardRef } from 'react';
import type { IconProps } from '../types';

export const CocoraValle = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, color = 'currentColor', style, ...props }, ref) => (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
      style={{ color, ...style }}
      {...props}
      dangerouslySetInnerHTML={{ __html: "<path d=\"M21.6,7.9c-.5-1.2-1.6-2-3-2s-2.5.8-3,2h5.9Z\"/><path d=\"M15.4,7.9c-.5-1.2-1.6-2-3-2s-2.5.8-3,2h5.9Z\"/><path d=\"M15.4,7.2c.2-1.2-.3-2.5-1.4-3.3s-2.5-.7-3.6,0l4.9,3.3Z\"/><path d=\"M19.7,3.5c-1.2-.4-2.6-.1-3.5.9s-1.1,2.4-.6,3.5l4-4.4Z\"/><rect x=\"14.6\" y=\"7.9\" width=\"2.2\" height=\"12.7\"/><line x1=\"17.2\" y1=\"15.9\" x2=\"22.6\" y2=\"17.5\"/><polyline points=\"1.4 16.7 6.9 12.8 13.9 14.9\"/>" }}
    />
  )
);

CocoraValle.displayName = 'CocoraValle';
