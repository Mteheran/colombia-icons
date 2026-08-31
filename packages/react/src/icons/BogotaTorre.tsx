import { forwardRef } from 'react';
import type { IconProps } from '../types';

export const BogotaTorre = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, color = 'currentColor', style, ...props }, ref) => (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
      style={{ color, ...style }}
      {...props}
      dangerouslySetInnerHTML={{ __html: "<polygon points=\"18.6 3.6 12 6.1 5.4 3.6 12 1.2 18.6 3.6\"/><polyline points=\"12 6.1 12 23 5.4 20.5 5.4 3.6\"/><polyline points=\"12 23 18.6 20 18.6 3.6\"/><line x1=\"14.3\" y1=\"5.5\" x2=\"14.3\" y2=\"9.5\"/><line x1=\"16.5\" y1=\"4.7\" x2=\"16.5\" y2=\"8.7\"/><line x1=\"14.3\" y1=\"11.9\" x2=\"14.3\" y2=\"15.9\"/><line x1=\"16.5\" y1=\"11.1\" x2=\"16.5\" y2=\"15.1\"/><line x1=\"14.3\" y1=\"17.8\" x2=\"14.3\" y2=\"21.8\"/><line x1=\"16.5\" y1=\"17\" x2=\"16.5\" y2=\"21\"/><line x1=\"9.6\" y1=\"5.5\" x2=\"9.6\" y2=\"9.6\"/><line x1=\"7.4\" y1=\"4.8\" x2=\"7.4\" y2=\"8.8\"/><line x1=\"9.6\" y1=\"11.9\" x2=\"9.6\" y2=\"15.9\"/><line x1=\"7.4\" y1=\"11.2\" x2=\"7.4\" y2=\"15.2\"/><line x1=\"9.6\" y1=\"17.8\" x2=\"9.6\" y2=\"21.8\"/><line x1=\"7.4\" y1=\"17.1\" x2=\"7.4\" y2=\"21.1\"/><polyline points=\"16 2.7 12 4.1 8 2.7\"/>" }}
    />
  )
);

BogotaTorre.displayName = 'BogotaTorre';
