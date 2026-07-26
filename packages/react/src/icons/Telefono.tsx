import { forwardRef } from 'react';
import type { IconProps } from '../types';

export const Telefono = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, color = 'currentColor', style, ...props }, ref) => (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
      style={{ color, ...style }}
      {...props}
      dangerouslySetInnerHTML={{ __html: "<path d=\"M5.5 4H9.5L11.5 9L9 10.5A11 11 0 0 0 13.8 15.3L15.3 12.8L20 14.8V18.5A2 2 0 0 1 18 20.5A16 16 0 0 1 3.5 6A2 2 0 0 1 5.5 4Z\"/>" }}
    />
  )
);

Telefono.displayName = 'Telefono';
