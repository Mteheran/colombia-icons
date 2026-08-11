import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'ci-sol',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<svg xmlns="http://www.w3.org/2000/svg" [attr.width]="size" [attr.height]="size" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" [style.color]="color"><circle cx="12" cy="12" r="4"/><path d="M12 4V6"/><path d="M12 18V20"/><path d="M4 12H6"/><path d="M18 12H20"/><path d="M6.34 6.34L7.76 7.76"/><path d="M17.66 6.34L16.24 7.76"/><path d="M6.34 17.66L7.76 16.24"/><path d="M17.66 17.66L16.24 16.24"/></svg>`,
})
export class SolIcon {
  @Input() size: number | string = 24;
  @Input() color = 'currentColor';
}
