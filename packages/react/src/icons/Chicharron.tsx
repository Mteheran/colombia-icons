import { forwardRef } from 'react';
import type { IconProps } from '../types';

export const Chicharron = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, color = 'currentColor', style, ...props }, ref) => (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
      style={{ color, ...style }}
      {...props}
      dangerouslySetInnerHTML={{ __html: "<path d=\"M11.2,3.8c.7-.7.4-.3.7-.7.2-.3,0-.6-.3-.8h-2c-.6,0-.8,0-1.1.4-1.8,2.7-4.3,11.4,1.6,18.8.2.3.7.3,1,.1l3.1-1.4c.4-.3.5-.8.2-1.1-.1-.1-.2-.2-.3-.4\" /><path d=\"M9.5,6s-2.2,7.2,2.2,13.3\" /><path d=\"M11.9,7.4h1c1-.1.8-.5,1.2.2.4.7.2,3.5.2,3.5,0,0,0,.6-.8.3-.9-.3-1.7.5-1.7.5,0,0,1.2-1.2,2.6.2,1.5,1.4,1.3,1.9,1.3,1.9l-2,1-.6.3s.7-.1,1.4-.2c.9-.1,2-.2,2.3.2.6.6.8,1.4.8,1.4l-1.7,1.1s0,.7-.7,1.2c-.7.5-1.2-.2-1.2-.2\" /><path d=\"M12,2.9s3.2.9,3.6,1.4c.3.3-.7,1.7-1.3,2.5-.1.1-.2.3-.4.4\" />" }}
    />
  )
);

Chicharron.displayName = 'Chicharron';
