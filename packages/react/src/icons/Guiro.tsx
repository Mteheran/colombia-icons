import { forwardRef } from 'react';
import type { IconProps } from '../types';

export const Guiro = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, color = 'currentColor', style, ...props }, ref) => (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
      style={{ color, ...style }}
      {...props}
      dangerouslySetInnerHTML={{ __html: "<ellipse cx=\"12.9\" cy=\"3\" rx=\"1.1\" ry=\"4.5\" transform=\"translate(8 15.4) rotate(-81.2)\"/><path d=\"M14.3,17.6l-.7,3.4c0,.4-.5.8-1,.9-.8.2-2.1.5-3.9.3s-2.8-1-3.5-1.5-.6-.8-.5-1.2L8.6,2.2\"/><line x1=\"17.3\" y1=\"3.8\" x2=\"16.3\" y2=\"9.1\"/><polyline points=\"14 9.2 15.3 10.5 17.7 10.5 16.1 8.9\"/><line x1=\"12.3\" y1=\"15.9\" x2=\"13.6\" y2=\"17.2\"/><polygon points=\"16.1 17.2 13.5 17.2 15.3 10.5 17.9 10.5 16.1 17.2\"/><circle cx=\"12.3\" cy=\"8\" r=\"1\"/><circle cx=\"11.7\" cy=\"11\" r=\"1\"/><circle cx=\"11\" cy=\"14\" r=\"1\"/><circle cx=\"10.4\" cy=\"16.9\" r=\"1\"/><circle cx=\"9.7\" cy=\"19.9\" r=\"1\"/><circle cx=\"9.8\" cy=\"6.4\" r=\"1\"/><circle cx=\"9.2\" cy=\"9.3\" r=\"1\"/><circle cx=\"8.5\" cy=\"12.3\" r=\"1\"/><circle cx=\"7.9\" cy=\"15.2\" r=\"1\"/><circle cx=\"7.2\" cy=\"18.2\" r=\"1\"/>" }}
    />
  )
);

Guiro.displayName = 'Guiro';
