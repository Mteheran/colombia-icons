import { forwardRef } from 'react';
import type { IconProps } from '../types';

export const Reenviar = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, color = 'currentColor', style, ...props }, ref) => (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
      style={{ color, ...style }}
      {...props}
      dangerouslySetInnerHTML={{ __html: "<path d=\"M15 17 20 12l-5-5\"/><path d=\"M20 12H9a5 5 0 0 0-5 5v2\"/>" }}
    />
  )
);

Reenviar.displayName = 'Reenviar';
