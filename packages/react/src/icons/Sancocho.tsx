import { forwardRef } from 'react';
import type { IconProps } from '../types';

export const Sancocho = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, color = 'currentColor', style, ...props }, ref) => (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
      style={{ color, ...style }}
      {...props}
      dangerouslySetInnerHTML={{ __html: "<path d=\"M8.6,4.9c1-.2,2.1-.3,3.3-.3,5.4,0,9.7,2.5,9.7,5.5s-4.4,5.5-9.7,5.5S2.1,13.2,2.1,10.2s.6-2.1,1.5-3\" /><path d=\"M21.9,14,16.1,9.9c0-.4.4-.4.6-.6.5-.4.4-1.5-.2-1.3s-.4.4-.6.5c-.8.5-1.8.4-2.6,0-2.5-.9-3.3-3.9-6.5-3.6s-4.3,5.1-.6,6.3,3.9-.7,6.2-.9c0,0,.6,0,1.6.1\" /><path d=\"M18.3,11s-.9,2.8-6.5,2.4\" /><path d=\"M21.6,10.2c0,3.7-1.9,8.9-9,9.2-7.8.3-10.5-5.5-10.5-9.2\" />" }}
    />
  )
);

Sancocho.displayName = 'Sancocho';
