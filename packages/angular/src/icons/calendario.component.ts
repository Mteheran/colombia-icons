import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'ci-calendario',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<svg xmlns="http://www.w3.org/2000/svg" [attr.width]="size" [attr.height]="size" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" [style.color]="color"><path d="M4 5H20V20H4Z M4 9H20 M8 3V6 M16 3V6"/></svg>`,
})
export class CalendarioIcon {
  @Input() size: number | string = 24;
  @Input() color = 'currentColor';
}
