import { forwardRef } from 'react';
import type { IconProps } from '../types';

export const ArrecifeCoral = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, color = 'currentColor', style, ...props }, ref) => (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
      style={{ color, ...style }}
      {...props}
      dangerouslySetInnerHTML={{ __html: "<path d=\"M7.5 22V9.5\"/><path d=\"M7.5 15C6 13 3.8 12.4 3 10.3\"/><path d=\"M7.5 13C9.2 10.8 9.8 10 9.8 7.5\"/><path d=\"M4 12.4C3.6 10.8 3.7 9.2 4.8 8.2\"/><path d=\"M16 22V12\"/><path d=\"M16 16.5C17.6 14.5 20.4 13.8 21 11.5\"/><path d=\"M16 14.5C14.5 13 14 11.8 14.2 10.2\"/><path d=\"M10.5 22C10.5 19.6 11.3 18.4 12 18.4C12.7 18.4 13.5 19.6 13.5 22\"/>" }}
    />
  )
);

ArrecifeCoral.displayName = 'ArrecifeCoral';
