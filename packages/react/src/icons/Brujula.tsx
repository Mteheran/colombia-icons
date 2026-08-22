import { forwardRef } from 'react';
import type { IconProps } from '../types';

export const Brujula = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, color = 'currentColor', style, ...props }, ref) => (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
      style={{ color, ...style }}
      {...props}
      dangerouslySetInnerHTML={{ __html: "<circle cx=\"12\" cy=\"12\" r=\"9\"/><path d=\"M8.5 15.5 10.5 10.5 15.5 8.5 13.5 13.5Z\"/><path d=\"M12 3v2\"/><path d=\"M12 19v2\"/><path d=\"M3 12h2\"/><path d=\"M19 12h2\"/>" }}
    />
  )
);

Brujula.displayName = 'Brujula';
