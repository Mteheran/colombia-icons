import { forwardRef } from 'react';
import type { IconProps } from '../types';

export const Alarma = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, color = 'currentColor', style, ...props }, ref) => (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
      style={{ color, ...style }}
      {...props}
      dangerouslySetInnerHTML={{ __html: "<circle cx=\"12\" cy=\"13\" r=\"7.5\"/><path d=\"M12 13V8M12 13L15.5 16.5\"/><path d=\"M6.6 3.4 3.7 5.5\"/><path d=\"M17.4 3.4 20.3 5.5\"/>" }}
    />
  )
);

Alarma.displayName = 'Alarma';
