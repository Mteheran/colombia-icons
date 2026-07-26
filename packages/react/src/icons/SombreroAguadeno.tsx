import { forwardRef } from 'react';
import type { IconProps } from '../types';

export const SombreroAguadeno = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, color = 'currentColor', style, ...props }, ref) => (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
      style={{ color, ...style }}
      {...props}
      dangerouslySetInnerHTML={{ __html: "<ellipse cx=\"12\" cy=\"15.5\" rx=\"9.5\" ry=\"2.5\"/><path d=\"M7.5 13.3C7.5 10 8.4 7.8 10 7.4C10.9 7.2 11.4 9 12 9C12.6 9 13.1 7.2 14 7.4C15.6 7.8 16.5 10 16.5 13.3\"/><path d=\"M7.6 12.2H16.4\"/>" }}
    />
  )
);

SombreroAguadeno.displayName = 'SombreroAguadeno';
