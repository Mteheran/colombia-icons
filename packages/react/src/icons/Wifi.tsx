import { forwardRef } from 'react';
import type { IconProps } from '../types';

export const Wifi = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, color = 'currentColor', style, ...props }, ref) => (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
      style={{ color, ...style }}
      {...props}
      dangerouslySetInnerHTML={{ __html: "<path d=\"M3.51 9.51A12 12 0 0 1 20.49 9.51\"/><path d=\"M6.34 12.34A8 8 0 0 1 17.66 12.34\"/><path d=\"M9.17 15.17A4 4 0 0 1 14.83 15.17\"/><path d=\"M12 18H12.01\"/>" }}
    />
  )
);

Wifi.displayName = 'Wifi';
