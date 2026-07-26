import { forwardRef } from 'react';
import type { IconProps } from '../types';

export const Mundo = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, color = 'currentColor', style, ...props }, ref) => (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
      style={{ color, ...style }}
      {...props}
      dangerouslySetInnerHTML={{ __html: "<circle cx=\"12\" cy=\"12\" r=\"9\"/><path d=\"M12 3a13 13 0 0 0 0 18a13 13 0 0 0 0-18\"/><path d=\"M3 12h18\"/>" }}
    />
  )
);

Mundo.displayName = 'Mundo';
