import { forwardRef } from 'react';
import type { IconProps } from '../types';

export const Futbol = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, color = 'currentColor', style, ...props }, ref) => (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
      style={{ color, ...style }}
      {...props}
      dangerouslySetInnerHTML={{ __html: "<circle cx=\"12\" cy=\"12\" r=\"8\"/><path d=\"M12 7.8 16 10.7 14.5 15.4 9.5 15.4 8 10.7Z\"/><path d=\"M12 7.8V4M16 10.7 19.6 9.5M14.5 15.4 16.7 18.5M9.5 15.4 7.3 18.5M8 10.7 4.4 9.5\"/>" }}
    />
  )
);

Futbol.displayName = 'Futbol';
