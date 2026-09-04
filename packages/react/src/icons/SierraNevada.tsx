import { forwardRef } from 'react';
import type { IconProps } from '../types';

export const SierraNevada = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, color = 'currentColor', style, ...props }, ref) => (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
      style={{ color, ...style }}
      {...props}
      dangerouslySetInnerHTML={{ __html: "<polyline points=\"12.1 12.7 17.2 11.3 18 12.1 19.1 12.8 22.5 16.4\"/><polyline points=\"1.5 16.2 5.4 11.6 6.3 10.5 7.6 10.2 9 8.9 15.4 17.9\"/><polyline points=\"8.8 9.7 9.9 11.4 8 13.7 10.2 15.6 9.2 17.6\"/><polyline points=\"16.3 11.7 17.2 12.9 17 13.9 16.3 15.5 17.5 15.9 18.3 16.9\"/><polyline points=\"3.6 20.1 5 19.5 9 19.9 12.2 19.8 15.2 20.8 20.1 20.8\"/><circle cx=\"18\" cy=\"7.7\" r=\".9\" fill=\"currentColor\" stroke=\"none\"/><circle cx=\"17.8\" cy=\"4.8\" r=\".7\" fill=\"currentColor\" stroke=\"none\"/><line x1=\"15.4\" y1=\"4\" x2=\"11.8\" y2=\"7.4\"/><line x1=\"11.8\" y1=\"4\" x2=\"15.4\" y2=\"7.4\"/><line x1=\"16.1\" y1=\"5.6\" x2=\"11.1\" y2=\"5.8\"/><line x1=\"13.4\" y1=\"3.2\" x2=\"13.8\" y2=\"8.1\"/>" }}
    />
  )
);

SierraNevada.displayName = 'SierraNevada';
