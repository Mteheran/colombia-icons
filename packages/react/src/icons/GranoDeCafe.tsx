import { forwardRef } from 'react';
import type { IconProps } from '../types';

export const GranoDeCafe = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, color = 'currentColor', style, ...props }, ref) => (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
      style={{ color, ...style }}
      {...props}
      dangerouslySetInnerHTML={{ __html: "<g transform=\"rotate(35 12 12)\"><ellipse cx=\"12\" cy=\"12\" rx=\"4.8\" ry=\"7.8\"/><path d=\"M12 4.6C10.2 8 13.8 16 12 19.4\"/></g>" }}
    />
  )
);

GranoDeCafe.displayName = 'GranoDeCafe';
