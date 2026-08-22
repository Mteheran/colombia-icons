import { forwardRef } from 'react';
import type { IconProps } from '../types';

export const BandejaEntrada = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, color = 'currentColor', style, ...props }, ref) => (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
      style={{ color, ...style }}
      {...props}
      dangerouslySetInnerHTML={{ __html: "<path d=\"M4 13h4l2 3h4l2-3h4\"/><path d=\"M6.4 5h11.2a2 2 0 0 1 1.9 1.36L22 13v4a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-4l2.5-6.64A2 2 0 0 1 6.4 5Z\"/>" }}
    />
  )
);

BandejaEntrada.displayName = 'BandejaEntrada';
