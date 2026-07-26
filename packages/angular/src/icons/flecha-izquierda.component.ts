import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'ci-flecha-izquierda',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<svg xmlns="http://www.w3.org/2000/svg" [attr.width]="size" [attr.height]="size" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" [style.color]="color"><path d="M20 12H4"/><path d="M11 19 4 12 11 5"/></svg>`,
})
export class FlechaIzquierdaIcon {
  @Input() size: number | string = 24;
  @Input() color = 'currentColor';
}
