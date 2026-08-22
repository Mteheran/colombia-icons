import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'ci-cronometro',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<svg xmlns="http://www.w3.org/2000/svg" [attr.width]="size" [attr.height]="size" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" [style.color]="color"><circle cx="12" cy="14" r="7.5"/><path d="M12 15V12"/><path d="M9.5 3.5h5"/><path d="M12 3.5v3"/><path d="M18.3 8.4 20 6.7"/></svg>`,
})
export class CronometroIcon {
  @Input() size: number | string = 24;
  @Input() color = 'currentColor';
}
