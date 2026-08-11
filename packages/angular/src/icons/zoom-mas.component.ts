import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'ci-zoom-mas',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<svg xmlns="http://www.w3.org/2000/svg" [attr.width]="size" [attr.height]="size" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" [style.color]="color"><circle cx="10" cy="10" r="6.5" /><path d="M14.6 14.6L20 20" /><path d="M10 7v6M7 10h6" /></svg>`,
})
export class ZoomMasIcon {
  @Input() size: number | string = 24;
  @Input() color = 'currentColor';
}
