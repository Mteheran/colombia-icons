import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'ci-calendario-evento',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<svg xmlns="http://www.w3.org/2000/svg" [attr.width]="size" [attr.height]="size" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" [style.color]="color"><path d="M4 5H20V20H4Z M4 9H20 M8 3V6 M16 3V6"/><rect x="7.5" y="12.5" width="3" height="3" fill="currentColor" stroke="none"/></svg>`,
})
export class CalendarioEventoIcon {
  @Input() size: number | string = 24;
  @Input() color = 'currentColor';
}
