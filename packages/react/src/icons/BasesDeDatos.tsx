import { forwardRef } from 'react';
import type { IconProps } from '../types';

export const BasesDeDatos = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, color = 'currentColor', style, ...props }, ref) => (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
      style={{ color, ...style }}
      {...props}
      dangerouslySetInnerHTML={{ __html: "<ellipse cx=\"8\" cy=\"5\" rx=\"5\" ry=\"2\"/><path d=\"M3 5v14a5 2 0 0 0 10 0V5\"/><path d=\"M3 12a5 2 0 0 0 10 0\"/><ellipse cx=\"17.5\" cy=\"11\" rx=\"2.8\" ry=\"1.3\"/><path d=\"M14.7 11v8a2.8 1.3 0 0 0 5.6 0V11\"/><path d=\"M14.7 15a2.8 1.3 0 0 0 5.6 0\"/>" }}
    />
  )
);

BasesDeDatos.displayName = 'BasesDeDatos';
