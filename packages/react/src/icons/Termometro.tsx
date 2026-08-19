import { forwardRef } from 'react';
import type { IconProps } from '../types';

export const Termometro = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, color = 'currentColor', style, ...props }, ref) => (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
      style={{ color, ...style }}
      {...props}
      dangerouslySetInnerHTML={{ __html: "<path d=\"M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z\"/><circle cx=\"12\" cy=\"18\" r=\"2.2\" fill=\"currentColor\" stroke=\"none\"/><path d=\"M12 16.5V11\"/><path d=\"M16 7h1\"/><path d=\"M16 9.5h1\"/><path d=\"M16 12h1\"/>" }}
    />
  )
);

Termometro.displayName = 'Termometro';
