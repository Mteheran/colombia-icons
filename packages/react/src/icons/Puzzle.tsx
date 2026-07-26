import { forwardRef } from 'react';
import type { IconProps } from '../types';

export const Puzzle = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, color = 'currentColor', style, ...props }, ref) => (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
      style={{ color, ...style }}
      {...props}
      dangerouslySetInnerHTML={{ __html: "<path d=\"M3.25 7.75H8.25A2.5 2.5 0 1 1 11.25 7.75H16.25V12.75A2.5 2.5 0 1 1 16.25 15.75V20.75H3.25Z\"/>" }}
    />
  )
);

Puzzle.displayName = 'Puzzle';
