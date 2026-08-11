import { forwardRef } from 'react';
import type { IconProps } from '../types';

export const ZoomMas = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, color = 'currentColor', style, ...props }, ref) => (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
      style={{ color, ...style }}
      {...props}
      dangerouslySetInnerHTML={{ __html: "<circle cx=\"10\" cy=\"10\" r=\"6.5\" /><path d=\"M14.6 14.6L20 20\" /><path d=\"M10 7v6M7 10h6\" />" }}
    />
  )
);

ZoomMas.displayName = 'ZoomMas';
