import { forwardRef } from 'react';
import type { IconProps } from '../types';

export const Verificado = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, color = 'currentColor', style, ...props }, ref) => (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
      style={{ color, ...style }}
      {...props}
      dangerouslySetInnerHTML={{ __html: "<path d=\"M12 3.2C13.7 4.3 16 5 18.3 5C18.9 5 19.4 5.5 19.4 6.1V11.3C19.4 15.8 16.4 18.9 12 20.8C7.6 18.9 4.6 15.8 4.6 11.3V6.1C4.6 5.5 5.1 5 5.7 5C8 5 10.3 4.3 12 3.2Z\"/><path d=\"M8.5 12 10.5 14 15.5 9\"/>" }}
    />
  )
);

Verificado.displayName = 'Verificado';
