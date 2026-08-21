import { forwardRef } from 'react';
import type { IconProps } from '../types';

export const ListaNumerada = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, color = 'currentColor', style, ...props }, ref) => (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
      style={{ color, ...style }}
      {...props}
      dangerouslySetInnerHTML={{ __html: "<line x1=\"10\" x2=\"20\" y1=\"6\" y2=\"6\"/><line x1=\"10\" x2=\"20\" y1=\"12\" y2=\"12\"/><line x1=\"10\" x2=\"20\" y1=\"18\" y2=\"18\"/><path d=\"M4 6h1v4\"/><path d=\"M4 10h2\"/><path d=\"M6 18H4c0-1 2-2 2-3s-1-1.5-2-1\"/>" }}
    />
  )
);

ListaNumerada.displayName = 'ListaNumerada';
