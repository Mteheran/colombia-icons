import { forwardRef } from 'react';
import type { IconProps } from '../types';

export const Imprimir = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, color = 'currentColor', style, ...props }, ref) => (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
      style={{ color, ...style }}
      {...props}
      dangerouslySetInnerHTML={{ __html: "<path d=\"M7 7V4.5H17V7\"/><path d=\"M5.5 7H18.5A1.5 1.5 0 0 1 20 8.5V13.5A1.5 1.5 0 0 1 18.5 15H5.5A1.5 1.5 0 0 1 4 13.5V8.5A1.5 1.5 0 0 1 5.5 7Z\"/><path d=\"M7 15V21H17V15\"/><path d=\"M9 17H15M9 19H15\" stroke-width=\"1\"/>" }}
    />
  )
);

Imprimir.displayName = 'Imprimir';
