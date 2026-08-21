import { forwardRef } from 'react';
import type { IconProps } from '../types';

export const Pegar = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, color = 'currentColor', style, ...props }, ref) => (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
      style={{ color, ...style }}
      {...props}
      dangerouslySetInnerHTML={{ __html: "<path d=\"M15 2H9a1 1 0 0 0-1 1v2c0 .6.4 1 1 1h6c.6 0 1-.4 1-1V3c0-.6-.4-1-1-1Z\"/><path d=\"M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h9\"/><path d=\"M16 4h2a2 2 0 0 1 2 2v4\"/><path d=\"M11 14h10\"/><path d=\"m17 10 4 4-4 4\"/>" }}
    />
  )
);

Pegar.displayName = 'Pegar';
