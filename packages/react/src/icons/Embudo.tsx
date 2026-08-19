import { forwardRef } from 'react';
import type { IconProps } from '../types';

export const Embudo = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, color = 'currentColor', style, ...props }, ref) => (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
      style={{ color, ...style }}
      {...props}
      dangerouslySetInnerHTML={{ __html: "<path d=\"M3 5H21L15 19H9Z\"/><path d=\"M5.1 10H18.9\"/><path d=\"M6.9 14H17.1\"/>" }}
    />
  )
);

Embudo.displayName = 'Embudo';
