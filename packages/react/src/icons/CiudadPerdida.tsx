import { forwardRef } from 'react';
import type { IconProps } from '../types';

export const CiudadPerdida = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, color = 'currentColor', style, ...props }, ref) => (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
      style={{ color, ...style }}
      {...props}
      dangerouslySetInnerHTML={{ __html: "<path d=\"M9.1,9.1c-.6-.6-.2-1.6.6-1.6,1.6-.1,4-.3,4.6.1.9.6,2.6,2.2,1.4,2.6s-4.5.4-5,.2-1-.7-1.6-1.3Z\"/><line x1=\"10.8\" y1=\"10.4\" x2=\"10\" y2=\"13\"/><line x1=\"16.3\" y1=\"10\" x2=\"17\" y2=\"13\"/><ellipse cx=\"13.5\" cy=\"13.8\" rx=\"4.1\" ry=\"1.5\"/><path d=\"M17.6,14.4s.4.9,0,1.9-.7,3.7,1.2,4.3\"/><path d=\"M14.6,15.4s1.3.4.8,1.6-1.9.7-1.7,2.7\"/><path d=\"M8.9,8.2l-2,2.6s-1.2.2-2.3.8-3.2,3.5-3.2,3.5\"/><polyline points=\"13 6.8 19.1 2.5 22.6 6.8\"/><path d=\"M1.7,8L11.1,1.4s3.3,4.3,3.5,4.2\"/><line x1=\"9.4\" y1=\"14.5\" x2=\"6.9\" y2=\"18.3\"/><path d=\"M6.4,22.6s6.9-5.5,13.4-1.3\"/>" }}
    />
  )
);

CiudadPerdida.displayName = 'CiudadPerdida';
