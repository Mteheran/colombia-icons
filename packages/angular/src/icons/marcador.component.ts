import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'ci-marcador',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<svg xmlns="http://www.w3.org/2000/svg" [attr.width]="size" [attr.height]="size" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" [style.color]="color"><path d="M6 20V6A2 2 0 0 1 8 4H16A2 2 0 0 1 18 6V20L12 16.5Z"/></svg>`,
})
export class MarcadorIcon {
  @Input() size: number | string = 24;
  @Input() color = 'currentColor';
}
