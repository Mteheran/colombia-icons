import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'ci-bolsa-compras',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<svg xmlns="http://www.w3.org/2000/svg" [attr.width]="size" [attr.height]="size" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" [style.color]="color"><path d="M5 7h14l-0.8 12.2a2 2 0 0 1 -2 1.8H7.8a2 2 0 0 1 -2 -1.8z" /><path d="M8.5 10V6.5a3.5 3.5 0 0 1 7 0V10" /></svg>`,
})
export class BolsaComprasIcon {
  @Input() size: number | string = 24;
  @Input() color = 'currentColor';
}
