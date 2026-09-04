import { forwardRef } from 'react';
import type { IconProps } from '../types';

export const CampanaSilenciada = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, color = 'currentColor', style, ...props }, ref) => (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
      style={{ color, ...style }}
      {...props}
      dangerouslySetInnerHTML={{ __html: "<path d=\"M3.8 10.56A3.96 3.96 0 0 1 11.72 10.56C11.72 14.88 13.52 16.32 13.52 16.32H2C2 16.32 3.8 14.88 3.8 10.56Z\"/><path d=\"M6.68 16.32A1.08 1.08 0 0 0 8.84 16.32\"/><path d=\"M16 9.5 21 14.5\"/><path d=\"M21 9.5 16 14.5\"/>" }}
    />
  )
);

CampanaSilenciada.displayName = 'CampanaSilenciada';
