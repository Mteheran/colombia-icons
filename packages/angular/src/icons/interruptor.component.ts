import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'ci-interruptor',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<svg xmlns="http://www.w3.org/2000/svg" [attr.width]="size" [attr.height]="size" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" [style.color]="color"><rect x="2" y="7" width="20" height="10" rx="5"/><circle cx="17" cy="12" r="2.5"/></svg>`,
})
export class InterruptorIcon {
  @Input() size: number | string = 24;
  @Input() color = 'currentColor';
}
