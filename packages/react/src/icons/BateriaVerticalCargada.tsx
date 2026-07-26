import { forwardRef } from 'react';
import type { IconProps } from '../types';

export const BateriaVerticalCargada = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, color = 'currentColor', style, ...props }, ref) => (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
      style={{ color, ...style }}
      {...props}
      dangerouslySetInnerHTML={{ __html: "<rect x=\"6\" y=\"5\" width=\"12\" height=\"17\" rx=\"2\"/><path d=\"M10.5 5V3H13.5V5\"/><path d=\"M9 9.5H15M9 13.5H15M9 17.5H15\"/>" }}
    />
  )
);

BateriaVerticalCargada.displayName = 'BateriaVerticalCargada';
