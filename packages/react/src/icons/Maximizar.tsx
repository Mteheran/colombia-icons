import { forwardRef } from 'react';
import type { IconProps } from '../types';

export const Maximizar = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, color = 'currentColor', style, ...props }, ref) => (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
      style={{ color, ...style }}
      {...props}
      dangerouslySetInnerHTML={{ __html: "<path d=\"M8 3H5A2 2 0 0 0 3 5V8\"/><path d=\"M21 8V5A2 2 0 0 0 19 3H16\"/><path d=\"M3 16V19A2 2 0 0 0 5 21H8\"/><path d=\"M16 21H19A2 2 0 0 0 21 19V16\"/>" }}
    />
  )
);

Maximizar.displayName = 'Maximizar';
