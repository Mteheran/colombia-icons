import { forwardRef } from 'react';
import type { IconProps } from '../types';

export const Ordenar = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, color = 'currentColor', style, ...props }, ref) => (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
      style={{ color, ...style }}
      {...props}
      dangerouslySetInnerHTML={{ __html: "<path d=\"M7 4V20\"/><path d=\"M4 7L7 4L10 7\"/><path d=\"M17 20V4\"/><path d=\"M14 17L17 20L20 17\"/>" }}
    />
  )
);

Ordenar.displayName = 'Ordenar';
