import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'ci-arepa',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<svg xmlns="http://www.w3.org/2000/svg" [attr.width]="size" [attr.height]="size" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" [style.color]="color"><circle cx="12" cy="12" r="8"/><path d="M9 9 15 15M7.7 11.9 12.1 16.3M11.9 7.7 16.3 12.1"/></svg>`,
})
export class ArepaIcon {
  @Input() size: number | string = 24;
  @Input() color = 'currentColor';
}
