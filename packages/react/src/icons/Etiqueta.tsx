import { forwardRef } from 'react';
import type { IconProps } from '../types';

export const Etiqueta = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, color = 'currentColor', style, ...props }, ref) => (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
      style={{ color, ...style }}
      {...props}
      dangerouslySetInnerHTML={{ __html: "<path d=\"M11.414 2.586A2 2 0 0 1 12.828 2H20a2 2 0 0 1 2 2v7.172a2 2 0 0 1 -0.586 1.414l-8.704 8.704a2.426 2.426 0 0 1 -3.42 0l-6.58 -6.58a2.426 2.426 0 0 1 0 -3.42z\" /><circle cx=\"16.5\" cy=\"7.5\" r=\"1.1\" />" }}
    />
  )
);

Etiqueta.displayName = 'Etiqueta';
