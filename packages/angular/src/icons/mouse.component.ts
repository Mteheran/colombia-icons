import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'ci-mouse',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<svg xmlns="http://www.w3.org/2000/svg" [attr.width]="size" [attr.height]="size" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" [style.color]="color"><rect x="6" y="2" width="12" height="20" rx="6"/><path d="M12 6v4"/></svg>`,
})
export class MouseIcon {
  @Input() size: number | string = 24;
  @Input() color = 'currentColor';
}
