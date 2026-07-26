import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'ci-flecha-derecha',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<svg xmlns="http://www.w3.org/2000/svg" [attr.width]="size" [attr.height]="size" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" [style.color]="color"><path d="M4 12H20"/><path d="M13 5 20 12 13 19"/></svg>`,
})
export class FlechaDerechaIcon {
  @Input() size: number | string = 24;
  @Input() color = 'currentColor';
}
