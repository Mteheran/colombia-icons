import { forwardRef } from 'react';
import type { IconProps } from '../types';

export const Analitica = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, color = 'currentColor', style, ...props }, ref) => (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
      style={{ color, ...style }}
      {...props}
      dangerouslySetInnerHTML={{ __html: "<path d=\"M3 15A9 7 0 0 1 21 15\"/><path d=\"M12 15l4.5-4\"/><circle cx=\"12\" cy=\"15\" r=\"1\" fill=\"currentColor\" stroke=\"none\"/>" }}
    />
  )
);

Analitica.displayName = 'Analitica';
