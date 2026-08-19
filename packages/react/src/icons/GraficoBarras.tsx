import { forwardRef } from 'react';
import type { IconProps } from '../types';

export const GraficoBarras = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, color = 'currentColor', style, ...props }, ref) => (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
      style={{ color, ...style }}
      {...props}
      dangerouslySetInnerHTML={{ __html: "<path d=\"M4 4v16h16\"/><path d=\"M8 16v-4\"/><path d=\"M13 16V8\"/><path d=\"M18 16v-6\"/>" }}
    />
  )
);

GraficoBarras.displayName = 'GraficoBarras';
