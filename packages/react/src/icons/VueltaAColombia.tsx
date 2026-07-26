import { forwardRef } from 'react';
import type { IconProps } from '../types';

export const VueltaAColombia = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, color = 'currentColor', style, ...props }, ref) => (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
      style={{ color, ...style }}
      {...props}
      dangerouslySetInnerHTML={{ __html: "<path d=\"M2.5 19.5 9.5 6.5 13.5 13.5 17 9 21.5 19.5Z\"/><path d=\"M6.5 19.5C8.5 18.5 6.5 16.8 8.5 15.8C10.5 14.8 8.5 12.8 9.5 11.2\"/><path d=\"M9.5 6.5V3.2\"/><path d=\"M9.5 3.2 12.4 4.2 9.5 5.2Z\"/>" }}
    />
  )
);

VueltaAColombia.displayName = 'VueltaAColombia';
