import { forwardRef } from 'react';
import type { IconProps } from '../types';

export const Maximizar4Flechas = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, color = 'currentColor', style, ...props }, ref) => (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
      style={{ color, ...style }}
      {...props}
      dangerouslySetInnerHTML={{ __html: "<path d=\"M15.5 4H20V8.5M20 4 13.8 10.2\"/><path d=\"M20 15.5V20H15.5M20 20 13.8 13.8\"/><path d=\"M8.5 20H4V15.5M4 20 10.2 13.8\"/><path d=\"M4 8.5V4H8.5M4 4 10.2 10.2\"/>" }}
    />
  )
);

Maximizar4Flechas.displayName = 'Maximizar4Flechas';
