import { forwardRef } from 'react';
import type { IconProps } from '../types';

export const Lluvia = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, color = 'currentColor', style, ...props }, ref) => (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
      style={{ color, ...style }}
      {...props}
      dangerouslySetInnerHTML={{ __html: "<path d=\"M6.8 15a4.8 4.8 0 1 1 1.7 -9.2a4.2 4.2 0 0 1 7.8 1.1a3.5 3.5 0 0 1 -0.3 8.1Z\"/><path d=\"M6.3 17.5L5.9 18.8\"/><path d=\"M9 17.5L8.6 18.8\"/><path d=\"M12 18L11.6 19.3\"/><path d=\"M15 17.5L14.6 18.8\"/>" }}
    />
  )
);

Lluvia.displayName = 'Lluvia';
