import { forwardRef } from 'react';
import type { IconProps } from '../types';

export const Subrayado = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, color = 'currentColor', style, ...props }, ref) => (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
      style={{ color, ...style }}
      {...props}
      dangerouslySetInnerHTML={{ __html: "<path d=\"M6 4v6a6 6 0 0 0 12 0V4\"/><line x1=\"4\" x2=\"20\" y1=\"20\" y2=\"20\"/>" }}
    />
  )
);

Subrayado.displayName = 'Subrayado';
