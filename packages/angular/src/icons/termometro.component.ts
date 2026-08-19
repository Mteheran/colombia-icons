import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'ci-termometro',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<svg xmlns="http://www.w3.org/2000/svg" [attr.width]="size" [attr.height]="size" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" [style.color]="color"><path d="M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z"/><circle cx="12" cy="18" r="2.2" fill="currentColor" stroke="none"/><path d="M12 16.5V11"/><path d="M16 7h1"/><path d="M16 9.5h1"/><path d="M16 12h1"/></svg>`,
})
export class TermometroIcon {
  @Input() size: number | string = 24;
  @Input() color = 'currentColor';
}
