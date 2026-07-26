import { forwardRef } from 'react';
import type { IconProps } from '../types';

export const SombreroVueltiao = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, color = 'currentColor', style, ...props }, ref) => (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
      style={{ color, ...style }}
      {...props}
      dangerouslySetInnerHTML={{ __html: "<ellipse cx=\"12\" cy=\"15.5\" rx=\"9.5\" ry=\"2.5\"/><path d=\"M7.5 13.3C7.5 9.8 8.6 7.5 12 7.5C15.4 7.5 16.5 9.8 16.5 13.3\"/><path d=\"M8.6 11.5 9.7 10.4 10.9 11.5 12 10.4 13.1 11.5 14.3 10.4 15.4 11.5\"/>" }}
    />
  )
);

SombreroVueltiao.displayName = 'SombreroVueltiao';
