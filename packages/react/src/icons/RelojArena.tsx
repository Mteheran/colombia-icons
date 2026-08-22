import { forwardRef } from 'react';
import type { IconProps } from '../types';

export const RelojArena = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, color = 'currentColor', style, ...props }, ref) => (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
      style={{ color, ...style }}
      {...props}
      dangerouslySetInnerHTML={{ __html: "<path d=\"M6 5h12\"/><path d=\"M6 19h12\"/><path d=\"M8 5c0 4 3 5.5 3 7s-3 3-3 7\"/><path d=\"M16 5c0 4-3 5.5-3 7s3 3 3 7\"/>" }}
    />
  )
);

RelojArena.displayName = 'RelojArena';
