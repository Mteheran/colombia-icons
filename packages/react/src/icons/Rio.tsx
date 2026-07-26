import { forwardRef } from 'react';
import type { IconProps } from '../types';

export const Rio = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, color = 'currentColor', style, ...props }, ref) => (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
      style={{ color, ...style }}
      {...props}
      dangerouslySetInnerHTML={{ __html: "<path d=\"M3 8Q4.5 6.7 6 8T9 8T12 8T15 8T18 8T21 8\"/><path d=\"M3 12Q4.5 10.7 6 12T9 12T12 12T15 12T18 12T21 12\"/><path d=\"M3 16Q4.5 14.7 6 16T9 16T12 16T15 16T18 16T21 16\"/>" }}
    />
  )
);

Rio.displayName = 'Rio';
