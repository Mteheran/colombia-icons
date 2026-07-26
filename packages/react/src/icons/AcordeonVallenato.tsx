import { forwardRef } from 'react';
import type { IconProps } from '../types';

export const AcordeonVallenato = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, color = 'currentColor', style, ...props }, ref) => (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
      style={{ color, ...style }}
      {...props}
      dangerouslySetInnerHTML={{ __html: "<rect x=\"2.8\" y=\"5.5\" width=\"5\" height=\"13\" rx=\"1.2\"/><rect x=\"16.2\" y=\"5.5\" width=\"5\" height=\"13\" rx=\"1.2\"/><path d=\"M7.8 7.2H16.2M7.8 16.8H16.2\"/><path d=\"M9.9 7.2V16.8M12 7.2V16.8M14.1 7.2V16.8\"/><circle cx=\"18.7\" cy=\"9\" r=\"0.55\" fill=\"currentColor\" stroke=\"none\"/><circle cx=\"18.7\" cy=\"12\" r=\"0.55\" fill=\"currentColor\" stroke=\"none\"/><circle cx=\"18.7\" cy=\"15\" r=\"0.55\" fill=\"currentColor\" stroke=\"none\"/>" }}
    />
  )
);

AcordeonVallenato.displayName = 'AcordeonVallenato';
