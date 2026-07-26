import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'ci-wifi',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<svg xmlns="http://www.w3.org/2000/svg" [attr.width]="size" [attr.height]="size" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" [style.color]="color"><path d="M3.51 9.51A12 12 0 0 1 20.49 9.51"/><path d="M6.34 12.34A8 8 0 0 1 17.66 12.34"/><path d="M9.17 15.17A4 4 0 0 1 14.83 15.17"/><path d="M12 18H12.01"/></svg>`,
})
export class WifiIcon {
  @Input() size: number | string = 24;
  @Input() color = 'currentColor';
}
