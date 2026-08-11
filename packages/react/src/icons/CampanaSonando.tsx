import { forwardRef } from 'react';
import type { IconProps } from '../types';

export const CampanaSonando = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, color = 'currentColor', style, ...props }, ref) => (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
      style={{ color, ...style }}
      {...props}
      dangerouslySetInnerHTML={{ __html: "<path d=\"M7 10A5 5 0 0 1 17 10C17 15.5 19 17 19 17H5C5 17 7 15.5 7 10Z\"/><path d=\"M10.5 17A1.5 1.5 0 0 0 13.5 17\"/><path d=\"M4 8A5 5 0 0 1 5.5 4.5\"/><path d=\"M20 8A5 5 0 0 0 18.5 4.5\"/>" }}
    />
  )
);

CampanaSonando.displayName = 'CampanaSonando';
