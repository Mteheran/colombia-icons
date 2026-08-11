import { forwardRef } from 'react';
import type { IconProps } from '../types';

export const Llave = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, color = 'currentColor', style, ...props }, ref) => (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
      style={{ color, ...style }}
      {...props}
      dangerouslySetInnerHTML={{ __html: "<circle cx=\"8\" cy=\"16\" r=\"5\"/><path d=\"M11.5 12.5L21 3\"/><path d=\"M16.25 7.75L18.75 10.25\"/><path d=\"M20.5 3.5L23 6\"/>" }}
    />
  )
);

Llave.displayName = 'Llave';
