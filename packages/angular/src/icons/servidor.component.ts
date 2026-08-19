import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'ci-servidor',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<svg xmlns="http://www.w3.org/2000/svg" [attr.width]="size" [attr.height]="size" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" [style.color]="color"><rect x="3" y="4" width="18" height="7" rx="1.5"/><rect x="3" y="13" width="18" height="7" rx="1.5"/><path d="M7 7.5h.01"/><path d="M7 16.5h.01"/></svg>`,
})
export class ServidorIcon {
  @Input() size: number | string = 24;
  @Input() color = 'currentColor';
}
