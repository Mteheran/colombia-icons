import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'ci-power',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<svg xmlns="http://www.w3.org/2000/svg" [attr.width]="size" [attr.height]="size" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" [style.color]="color"><path d="M12 3V12"/><path d="M18.4 6.6A9 9 0 1 1 5.6 6.6"/></svg>`,
})
export class PowerIcon {
  @Input() size: number | string = 24;
  @Input() color = 'currentColor';
}
