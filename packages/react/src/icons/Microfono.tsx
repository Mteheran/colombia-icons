import { forwardRef } from 'react';
import type { IconProps } from '../types';

export const Microfono = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, color = 'currentColor', style, ...props }, ref) => (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
      style={{ color, ...style }}
      {...props}
      dangerouslySetInnerHTML={{ __html: "<rect x=\"9\" y=\"2.5\" width=\"6\" height=\"12\" rx=\"3\"/><path d=\"M5.5 11V12A6.5 6.5 0 0 0 18.5 12V11\"/><path d=\"M12 18.5V21\"/><path d=\"M8.5 21H15.5\"/>" }}
    />
  )
);

Microfono.displayName = 'Microfono';
