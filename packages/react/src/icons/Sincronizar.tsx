import { forwardRef } from 'react';
import type { IconProps } from '../types';

export const Sincronizar = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, color = 'currentColor', style, ...props }, ref) => (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
      style={{ color, ...style }}
      {...props}
      dangerouslySetInnerHTML={{ __html: "<path d=\"M3 11V10a4 4 0 0 1 4-4h14\"/><path d=\"m17 2 4 4-4 4\"/><path d=\"M21 13v1a4 4 0 0 1-4 4H3\"/><path d=\"m7 22-4-4 4-4\"/>" }}
    />
  )
);

Sincronizar.displayName = 'Sincronizar';
