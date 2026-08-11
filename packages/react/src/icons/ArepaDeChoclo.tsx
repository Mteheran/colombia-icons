import { forwardRef } from 'react';
import type { IconProps } from '../types';

export const ArepaDeChoclo = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, color = 'currentColor', style, ...props }, ref) => (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
      style={{ color, ...style }}
      {...props}
      dangerouslySetInnerHTML={{ __html: "<ellipse cx=\"11.8\" cy=\"9.7\" rx=\"8.6\" ry=\"3.2\" /><path d=\"M20.4,9.3c.6.8.5,4.9.5,4.9-.3,2-4.4,3.4-9.1,3.4s-8.6-1.6-8.6-3.6c0,0-.2-4.7.6-5.3\" /><path d=\"M20.4,9.2c.6.8.5,2.6.5,2.6-.2,1.1-1.6,2.1-3.7,2.6-.3.6-1.9,1.2-2.9.9s-2-.3-3.3.6-2.1.8-2.8,0-1.2-1.4-1.2-1.4h-.3c-2.2-.7-3.6-1.8-3.6-2.9,0,0-.2-2.5.6-3\" /><path d=\"M7.1,8.9s-1.2,1.8,1.1,1.5\" /><path d=\"M16.9,8.9s1.2,1.8-1.1,1.5\" /><path d=\"M12.5,8.9s-1.4-1.1-2,.5\" /><path d=\"M12.1,10.7s1.6.8,1.8-.9\" />" }}
    />
  )
);

ArepaDeChoclo.displayName = 'ArepaDeChoclo';
