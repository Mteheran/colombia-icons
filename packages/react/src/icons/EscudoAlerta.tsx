import { forwardRef } from 'react';
import type { IconProps } from '../types';

export const EscudoAlerta = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, color = 'currentColor', style, ...props }, ref) => (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
      style={{ color, ...style }}
      {...props}
      dangerouslySetInnerHTML={{ __html: "<path d=\"M12 2L20 5V12C20 18 12 22 12 22C12 22 4 18 4 12V5L12 2Z\"/><path d=\"M12 8V13M12 16V16.01\"/>" }}
    />
  )
);

EscudoAlerta.displayName = 'EscudoAlerta';
