import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'ci-guardar',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<svg xmlns="http://www.w3.org/2000/svg" [attr.width]="size" [attr.height]="size" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" [style.color]="color"><path d="M6 4H16L19 7V20H6Z M9 4V9H15V4 M13 4V7 M9 20V13H15V20"/></svg>`,
})
export class GuardarIcon {
  @Input() size: number | string = 24;
  @Input() color = 'currentColor';
}
