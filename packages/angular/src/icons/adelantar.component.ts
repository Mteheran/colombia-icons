import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'ci-adelantar',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<svg xmlns="http://www.w3.org/2000/svg" [attr.width]="size" [attr.height]="size" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" [style.color]="color"><path d="M3 6l8 6-8 6ZM12 6l8 6-8 6Z" /></svg>`,
})
export class AdelantarIcon {
  @Input() size: number | string = 24;
  @Input() color = 'currentColor';
}
