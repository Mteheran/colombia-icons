import { forwardRef } from 'react';
import type { IconProps } from '../types';

export const Jaguar = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, color = 'currentColor', style, ...props }, ref) => (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
      style={{ color, ...style }}
      {...props}
      dangerouslySetInnerHTML={{ __html: "<path d=\"M19.1,8.8c3.6-1.8,1.9-5.6,1.9-5.6-2.9-.2-3.9,3-3.9,3\" /><path d=\"M4.4,8.8c-2.8-1.9-1.5-6-1.5-6,2.9.2,4.3,1.7,4.3,1.7\" /><path d=\"M17.3,5s-4.2-3.9-10.1-.4\" /><path d=\"M13.3,10.4c-.4,1.3,1.7,2.5,2.1,4,.5,2.3-1.3,2.5-1.3,2.5-1,.2-2.1-.6-2.1-.6\" /><path d=\"M12.2,16.3s-1.1.5-2.3.6-1.8-.6-1.1-2.3\" /><path d=\"M12,16.3s-.3-.9-.8-1.4.9-1.1,1.3-.7-.5,2-.5,2Z\" /><path d=\"M4.5,8.8s-2.3,4.3,2.6,9.2,6.7,2.9,8.1,1.5,1.8-1.7,2.5-2.6c1.4-1.7,3.2-5.7,1.5-8.1\" /><path d=\"M13.4,10.2s1.3-1.3,3-.8c0,0,.6,1.6-1.4.4\" /><path d=\"M10.2,10.4s-1.2-1-3-.4c0,0,.9,1.6,1.8.4\" /><path d=\"M8.9,6.3s.4,1.4,1.3,0\" /><path d=\"M4.9,5.5s-.8,1.2.7,1\" /><path d=\"M18.1,13s-.4-1.3,1.2-.3\" /><path d=\"M13.8,19.6s-.4-1.3,1.2-.3\" /><path d=\"M14.1,6.2s-.6-.6-1,.5\" /><path d=\"M20.3,6.4s-.6-.6-1,.5\" /><path d=\"M6.3,12.3s-.6,1.1.8.9\" /><path d=\"M9.8,19.1s-.6,1.1.8.9\" /><line x1=\"11.4\" y1=\"16.9\" x2=\"12.8\" y2=\"16.9\" />" }}
    />
  )
);

Jaguar.displayName = 'Jaguar';
