import { forwardRef } from 'react';
import type { IconProps } from '../types';

export const RegionPacifica = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, color = 'currentColor', style, ...props }, ref) => (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
      style={{ color, ...style }}
      {...props}
      dangerouslySetInnerHTML={{ __html: "<path d=\"M10.4,21.6c-.2.5-.8.7-1.3.6s-1.4-.5-1.4-1.1c0-1.1.4-.4,1.1-.9s1.1-.5,1.1-.9,1.4-.8,1.9-1.6,1.3-1.9,1-2.5.6-.3-.5-1.1,0-.3,0-1.8v-2.7c0-.2,0-.4.2-.6s.2-.7-.2-1.4c-.6-1.1-1.9-.8-.6-1.9s1.2-2.4,1.1-2.4.3-1.9.5-1.1-.1,1.9.4,3.1.3,1.2.9,1.4-.2.5.4,2.1,1.4,2.8.7,3.8-1.1,2.6-1.1,3.3-.6.9-.8,1.9-1,2.9-1.6,2.5-1.3,0-1.3,0l-.7,1.5Z\"/>" }}
    />
  )
);

RegionPacifica.displayName = 'RegionPacifica';
