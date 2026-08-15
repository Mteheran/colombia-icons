import { forwardRef } from 'react';
import type { IconProps } from '../types';

export const SombreroAguadeno = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, color = 'currentColor', style, ...props }, ref) => (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
      style={{ color, ...style }}
      {...props}
      dangerouslySetInnerHTML={{ __html: "<path d=\"M5.5,10.8c3.8,2.4,11.9,3.1,12.1.4,0,0,.1,1.5.4,2.5,0,0-1.8,2.4-8.5,1.1-2.9-.7-4.3-2.1-4.3-2.1,0,0,.3-1.9.3-1.9Z\" fill=\"currentColor\" /><path d=\"M17.6,11.9v-4.1s-2.6-2.4-4-3.1-5.2.8-6.1.9\" /><path d=\"M5.5,10.8l.5-4.7s.2-1,2.8,0,2.2-.3,4.8,1.4\" /><path d=\"M17.9,8.8c3.7,1.6,5.2,4.3,4.8,6.4s-3.6,5.4-9.8,3.8c-4-1-6.3-1.6-8.2-2.1-4-1.2-3.7-3.9-3.2-5.1s1.9-2.6,4.2-3.5\" />" }}
    />
  )
);

SombreroAguadeno.displayName = 'SombreroAguadeno';
