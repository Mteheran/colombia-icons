import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'ci-tendencia-abajo',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<svg xmlns="http://www.w3.org/2000/svg" [attr.width]="size" [attr.height]="size" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" [style.color]="color"><path d="M4 7.5 9.5 13 13 9.5 20 16.5"/><path d="M15 16.5H20V11.5"/></svg>`,
})
export class TendenciaAbajoIcon {
  @Input() size: number | string = 24;
  @Input() color = 'currentColor';
}
