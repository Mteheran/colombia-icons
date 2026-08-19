import { forwardRef } from 'react';
import type { IconProps } from '../types';

export const PapeleraReciclaje = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, color = 'currentColor', style, ...props }, ref) => (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
      style={{ color, ...style }}
      {...props}
      dangerouslySetInnerHTML={{ __html: "<ellipse cx=\"12\" cy=\"6\" rx=\"7\" ry=\"2\"/><path d=\"M5 6l2.5 14h9L19 6\"/><path d=\"M9 9.5l.5 7\"/><path d=\"M12 9.5v7\"/><path d=\"M15 9.5l-.5 7\"/>" }}
    />
  )
);

PapeleraReciclaje.displayName = 'PapeleraReciclaje';
