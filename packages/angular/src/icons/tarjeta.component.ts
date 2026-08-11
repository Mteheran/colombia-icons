import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'ci-tarjeta',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<svg xmlns="http://www.w3.org/2000/svg" [attr.width]="size" [attr.height]="size" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" [style.color]="color"><rect x="2" y="5" width="20" height="14" rx="2.5"/><path d="M2 9.5H22"/><path d="M6 15H9.5"/></svg>`,
})
export class TarjetaIcon {
  @Input() size: number | string = 24;
  @Input() color = 'currentColor';
}
