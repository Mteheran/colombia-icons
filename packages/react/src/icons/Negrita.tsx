import { forwardRef } from 'react';
import type { IconProps } from '../types';

export const Negrita = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, color = 'currentColor', style, ...props }, ref) => (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
      style={{ color, ...style }}
      {...props}
      dangerouslySetInnerHTML={{ __html: "<path d=\"M14 12a4 4 0 0 0 0-8H6v8\"/><path d=\"M15 20a4 4 0 0 0 0-8H6v8Z\"/>" }}
    />
  )
);

Negrita.displayName = 'Negrita';
