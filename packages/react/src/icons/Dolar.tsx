import { forwardRef } from 'react';
import type { IconProps } from '../types';

export const Dolar = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, color = 'currentColor', style, ...props }, ref) => (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
      style={{ color, ...style }}
      {...props}
      dangerouslySetInnerHTML={{ __html: "<path d=\"M12 1.5V5M12 19V22.5\"/><path d=\"M16 7C15.5 5.8 14 5 12 5C9.5 5 8 6.5 8 8.5C8 10.5 8.5 12 12 12C15.5 12 16 13.5 16 15.5C16 17.5 14.5 19 12 19C10 19 8.5 18.2 8 17\"/>" }}
    />
  )
);

Dolar.displayName = 'Dolar';
