import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'ci-archivo',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<svg xmlns="http://www.w3.org/2000/svg" [attr.width]="size" [attr.height]="size" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" [style.color]="color"><path d="M5 4H15L19 8V19H5Z M15 4V8H19 M8 10H16 M8 13H16 M8 16H14"/></svg>`,
})
export class ArchivoIcon {
  @Input() size: number | string = 24;
  @Input() color = 'currentColor';
}
