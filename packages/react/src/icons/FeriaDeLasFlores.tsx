import { forwardRef } from 'react';
import type { IconProps } from '../types';

export const FeriaDeLasFlores = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, color = 'currentColor', style, ...props }, ref) => (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
      style={{ color, ...style }}
      {...props}
      dangerouslySetInnerHTML={{ __html: "<circle cx=\"12\" cy=\"9.7\" r=\"6.5\"/><circle cx=\"12\" cy=\"7\" r=\"1.5\"/><circle cx=\"9.1\" cy=\"11.3\" r=\"1.5\"/><circle cx=\"14.9\" cy=\"11.3\" r=\"1.5\"/><path d=\"M9.5 15.7 8.6 20.5M14.5 15.7 15.4 20.5M8.92 18.8H15.08\"/>" }}
    />
  )
);

FeriaDeLasFlores.displayName = 'FeriaDeLasFlores';
