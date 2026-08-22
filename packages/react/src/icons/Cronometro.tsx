import { forwardRef } from 'react';
import type { IconProps } from '../types';

export const Cronometro = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, color = 'currentColor', style, ...props }, ref) => (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
      style={{ color, ...style }}
      {...props}
      dangerouslySetInnerHTML={{ __html: "<circle cx=\"12\" cy=\"14\" r=\"7.5\"/><path d=\"M12 15V12\"/><path d=\"M9.5 3.5h5\"/><path d=\"M12 3.5v3\"/><path d=\"M18.3 8.4 20 6.7\"/>" }}
    />
  )
);

Cronometro.displayName = 'Cronometro';
