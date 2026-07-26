import { forwardRef } from 'react';
import type { IconProps } from '../types';

export const Bandera = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, color = 'currentColor', style, ...props }, ref) => (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
      style={{ color, ...style }}
      {...props}
      dangerouslySetInnerHTML={{ __html: "<path d=\"M5.5 2V22\"/><path d=\"M5.5 2C8 1 10 3 12.5 2C15 1 17 3 19.5 2V9.5C17 10.5 15 8.5 12.5 9.5C10 10.5 8 8.5 5.5 9.5Z\"/>" }}
    />
  )
);

Bandera.displayName = 'Bandera';
