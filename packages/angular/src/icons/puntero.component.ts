import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'ci-puntero',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<svg xmlns="http://www.w3.org/2000/svg" [attr.width]="size" [attr.height]="size" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" [style.color]="color"><path d="M6.3 3V19.1L10.5 15 12.9 21 16 20.1 13.6 14.1H17.7Z"/></svg>`,
})
export class PunteroIcon {
  @Input() size: number | string = 24;
  @Input() color = 'currentColor';
}
