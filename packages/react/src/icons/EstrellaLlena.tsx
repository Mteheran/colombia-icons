import { forwardRef } from 'react';
import type { IconProps } from '../types';

export const EstrellaLlena = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, color = 'currentColor', style, ...props }, ref) => (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor" stroke="none"
      style={{ color, ...style }}
      {...props}
      dangerouslySetInnerHTML={{ __html: "<path d=\"M12 3L14.1 9.1L20.6 9.2L15.4 13.1L17.3 19.3L12 15.6L6.7 19.3L8.6 13.1L3.4 9.2L9.9 9.1Z\"/>" }}
    />
  )
);

EstrellaLlena.displayName = 'EstrellaLlena';
