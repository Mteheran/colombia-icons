import { forwardRef } from 'react';
import type { IconProps } from '../types';

export const Hashtag = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, color = 'currentColor', style, ...props }, ref) => (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
      style={{ color, ...style }}
      {...props}
      dangerouslySetInnerHTML={{ __html: "<path d=\"M4.5 9H19.5\"/><path d=\"M4.5 15H19.5\"/><path d=\"M11 4 7 20\"/><path d=\"M17 4 13 20\"/>" }}
    />
  )
);

Hashtag.displayName = 'Hashtag';
