import { forwardRef } from 'react';
import type { IconProps } from '../types';

export const Ciclismo = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, color = 'currentColor', style, ...props }, ref) => (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
      style={{ color, ...style }}
      {...props}
      dangerouslySetInnerHTML={{ __html: "<circle cx=\"5.5\" cy=\"17.5\" r=\"3.3\"/><circle cx=\"18.5\" cy=\"17.5\" r=\"3.3\"/><path d=\"M5.5 17.5 10.4 10.8H15.2L12 17.5Z\"/><path d=\"M15.2 10.8 18.5 17.5\"/><path d=\"M9.4 10.8H11.4\"/><path d=\"M15.2 10.8 16 9\"/><path d=\"M15.1 9H16.8C17.8 9.1 18.2 9.9 18 10.6C17.85 11.1 17.5 11.2 17 11\"/><circle cx=\"12\" cy=\"17.5\" r=\"0.8\"/>" }}
    />
  )
);

Ciclismo.displayName = 'Ciclismo';
