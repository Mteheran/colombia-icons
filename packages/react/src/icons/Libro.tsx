import { forwardRef } from 'react';
import type { IconProps } from '../types';

export const Libro = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, color = 'currentColor', style, ...props }, ref) => (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
      style={{ color, ...style }}
      {...props}
      dangerouslySetInnerHTML={{ __html: "<path d=\"M12 6.5V18.7\"/><path d=\"M12 6.5C9.5 5.2 6.5 5 3.5 5.3V17.5C6.5 17.2 9.5 17.4 12 18.7\"/><path d=\"M12 6.5C14.5 5.2 17.5 5 20.5 5.3V17.5C17.5 17.2 14.5 17.4 12 18.7\"/>" }}
    />
  )
);

Libro.displayName = 'Libro';
