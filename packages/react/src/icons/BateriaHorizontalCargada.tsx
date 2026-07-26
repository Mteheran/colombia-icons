import { forwardRef } from 'react';
import type { IconProps } from '../types';

export const BateriaHorizontalCargada = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, color = 'currentColor', style, ...props }, ref) => (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
      style={{ color, ...style }}
      {...props}
      dangerouslySetInnerHTML={{ __html: "<rect x=\"2\" y=\"6\" width=\"17\" height=\"12\" rx=\"2\"/><path d=\"M19 10.5H21V13.5H19\"/><path d=\"M6.5 9V15M10.5 9V15M14.5 9V15\"/>" }}
    />
  )
);

BateriaHorizontalCargada.displayName = 'BateriaHorizontalCargada';
