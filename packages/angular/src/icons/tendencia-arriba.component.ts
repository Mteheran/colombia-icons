import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'ci-tendencia-arriba',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<svg xmlns="http://www.w3.org/2000/svg" [attr.width]="size" [attr.height]="size" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" [style.color]="color"><path d="M4 16.5 9.5 11 13 14.5 20 7.5"/><path d="M15 7.5H20V12.5"/></svg>`,
})
export class TendenciaArribaIcon {
  @Input() size: number | string = 24;
  @Input() color = 'currentColor';
}
