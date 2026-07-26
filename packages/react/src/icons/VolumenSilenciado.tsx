import { forwardRef } from 'react';
import type { IconProps } from '../types';

export const VolumenSilenciado = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, color = 'currentColor', style, ...props }, ref) => (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
      style={{ color, ...style }}
      {...props}
      dangerouslySetInnerHTML={{ __html: "<path d=\"M3 10H6L11 5V19L6 14H3Z\"/><path d=\"M15 9.5 20 14.5\"/><path d=\"M20 9.5 15 14.5\"/>" }}
    />
  )
);

VolumenSilenciado.displayName = 'VolumenSilenciado';
