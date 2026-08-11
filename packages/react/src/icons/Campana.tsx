import { forwardRef } from 'react';
import type { IconProps } from '../types';

export const Campana = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, color = 'currentColor', style, ...props }, ref) => (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
      style={{ color, ...style }}
      {...props}
      dangerouslySetInnerHTML={{ __html: "<path d=\"M6.5 9A5.5 5.5 0 0 1 17.5 9C17.5 15 20 17 20 17H4C4 17 6.5 15 6.5 9Z\"/><path d=\"M10.5 17A1.5 1.5 0 0 0 13.5 17\"/>" }}
    />
  )
);

Campana.displayName = 'Campana';
