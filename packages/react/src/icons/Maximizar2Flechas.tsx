import { forwardRef } from 'react';
import type { IconProps } from '../types';

export const Maximizar2Flechas = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, color = 'currentColor', style, ...props }, ref) => (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
      style={{ color, ...style }}
      {...props}
      dangerouslySetInnerHTML={{ __html: "<path d=\"M15.5 4H20V8.5\"/><path d=\"M20 4 13 11\"/><path d=\"M8.5 20H4V15.5\"/><path d=\"M4 20 11 13\"/>" }}
    />
  )
);

Maximizar2Flechas.displayName = 'Maximizar2Flechas';
