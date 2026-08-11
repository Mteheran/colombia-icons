import { forwardRef } from 'react';
import type { IconProps } from '../types';

export const Cohete = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, color = 'currentColor', style, ...props }, ref) => (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
      style={{ color, ...style }}
      {...props}
      dangerouslySetInnerHTML={{ __html: "<path d=\"M12 2.5C14.5 5 15.5 8 15.5 11.5C15.5 13.5 14.8 15 14 16H10C9.2 15 8.5 13.5 8.5 11.5C8.5 8 9.5 5 12 2.5Z\"/><circle cx=\"12\" cy=\"9.5\" r=\"1.75\"/><path d=\"M8.5 13.5L5.5 15.5V17.5L8.7 15.8\"/><path d=\"M15.5 13.5L18.5 15.5V17.5L15.3 15.8\"/><path d=\"M10 16C10 18 10.5 19.5 12 21C13.5 19.5 14 18 14 16\"/>" }}
    />
  )
);

Cohete.displayName = 'Cohete';
