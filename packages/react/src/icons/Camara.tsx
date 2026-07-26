import { forwardRef } from 'react';
import type { IconProps } from '../types';

export const Camara = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, color = 'currentColor', style, ...props }, ref) => (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
      style={{ color, ...style }}
      {...props}
      dangerouslySetInnerHTML={{ __html: "<path d=\"M4.5 7.5H7L8.5 4.8H15.5L17 7.5H19.5A2 2 0 0 1 21.5 9.5V18A2 2 0 0 1 19.5 20H4.5A2 2 0 0 1 2.5 18V9.5A2 2 0 0 1 4.5 7.5Z\"/><circle cx=\"12\" cy=\"13.7\" r=\"3.2\"/><circle cx=\"5.5\" cy=\"10.2\" r=\"0.6\" fill=\"currentColor\" stroke=\"none\"/>" }}
    />
  )
);

Camara.displayName = 'Camara';
