import { forwardRef } from 'react';
import type { IconProps } from '../types';

export const BugMariquita = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, color = 'currentColor', style, ...props }, ref) => (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
      style={{ color, ...style }}
      {...props}
      dangerouslySetInnerHTML={{ __html: "<circle cx=\"12\" cy=\"13\" r=\"7\"/><path d=\"M12 6V20\"/><path d=\"M10 6.5L8.5 4.5\"/><path d=\"M14 6.5L15.5 4.5\"/><circle cx=\"8.5\" cy=\"11\" r=\"0.9\" fill=\"currentColor\" stroke=\"none\"/><circle cx=\"15.5\" cy=\"11\" r=\"0.9\" fill=\"currentColor\" stroke=\"none\"/><circle cx=\"9.5\" cy=\"16\" r=\"0.9\" fill=\"currentColor\" stroke=\"none\"/><circle cx=\"14.5\" cy=\"16\" r=\"0.9\" fill=\"currentColor\" stroke=\"none\"/>" }}
    />
  )
);

BugMariquita.displayName = 'BugMariquita';
