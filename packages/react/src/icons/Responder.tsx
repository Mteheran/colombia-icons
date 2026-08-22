import { forwardRef } from 'react';
import type { IconProps } from '../types';

export const Responder = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, color = 'currentColor', style, ...props }, ref) => (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
      style={{ color, ...style }}
      {...props}
      dangerouslySetInnerHTML={{ __html: "<path d=\"M9 17 4 12l5-5\"/><path d=\"M4 12h11a5 5 0 0 1 5 5v2\"/>" }}
    />
  )
);

Responder.displayName = 'Responder';
