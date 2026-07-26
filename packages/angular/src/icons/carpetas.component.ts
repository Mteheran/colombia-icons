import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'ci-carpetas',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<svg xmlns="http://www.w3.org/2000/svg" [attr.width]="size" [attr.height]="size" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" [style.color]="color"><path d="M3 10H6V12H14V21H3Z M6 7H9V9H17V17 M9 4H12V6H20V14"/></svg>`,
})
export class CarpetasIcon {
  @Input() size: number | string = 24;
  @Input() color = 'currentColor';
}
