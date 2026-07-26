import { forwardRef } from 'react';
import type { IconProps } from '../types';

export const MolaKuna = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, color = 'currentColor', style, ...props }, ref) => (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
      style={{ color, ...style }}
      {...props}
      dangerouslySetInnerHTML={{ __html: "<rect x=\"3\" y=\"4.5\" width=\"18\" height=\"15\" rx=\"1.5\"/><path d=\"M12 6 18 12 12 18 6 12Z\"/><path d=\"M12 8.6 15.4 12 12 15.4 8.6 12Z\"/><path d=\"M12 11.2 12.8 12 12 12.8 11.2 12Z\"/>" }}
    />
  )
);

MolaKuna.displayName = 'MolaKuna';
