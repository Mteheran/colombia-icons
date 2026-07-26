import { forwardRef } from 'react';
import type { IconProps } from '../types';

export const Trofeo = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, color = 'currentColor', style, ...props }, ref) => (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
      style={{ color, ...style }}
      {...props}
      dangerouslySetInnerHTML={{ __html: "<path d=\"M6 9A6 6 0 0 0 18 9V3A1 1 0 0 0 17 2H7A1 1 0 0 0 6 3Z\"/><path d=\"M18 9H19.5A1 1 0 0 0 19.5 4H18\"/><path d=\"M6 9H4.5A1 1 0 0 1 4.5 4H6\"/><path d=\"M10 14.66V16.29A2 2 0 0 1 9.02 17.98A5 5 0 0 0 7 21.98\"/><path d=\"M14 14.66V16.29A2 2 0 0 0 14.98 17.98A5 5 0 0 1 17 21.98\"/><path d=\"M6.5 22H17.5\"/>" }}
    />
  )
);

Trofeo.displayName = 'Trofeo';
