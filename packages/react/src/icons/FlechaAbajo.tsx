import { forwardRef } from 'react';
import type { IconProps } from '../types';

export const FlechaAbajo = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, color = 'currentColor', style, ...props }, ref) => (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
      style={{ color, ...style }}
      {...props}
      dangerouslySetInnerHTML={{ __html: "<path d=\"M12 4V20\"/><path d=\"M19 13 12 20 5 13\"/>" }}
    />
  )
);

FlechaAbajo.displayName = 'FlechaAbajo';
