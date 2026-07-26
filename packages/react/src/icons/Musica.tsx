import { forwardRef } from 'react';
import type { IconProps } from '../types';

export const Musica = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, color = 'currentColor', style, ...props }, ref) => (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
      style={{ color, ...style }}
      {...props}
      dangerouslySetInnerHTML={{ __html: "<ellipse cx=\"7\" cy=\"18\" rx=\"2.5\" ry=\"2\"/><ellipse cx=\"15.5\" cy=\"14.5\" rx=\"2.5\" ry=\"2\"/><path d=\"M9.5 18V6.5C12 4.9 15.5 4.3 18 3.5V14.5\"/>" }}
    />
  )
);

Musica.displayName = 'Musica';
