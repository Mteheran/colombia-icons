import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'ci-imagen',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<svg xmlns="http://www.w3.org/2000/svg" [attr.width]="size" [attr.height]="size" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" [style.color]="color"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M8.5 8.5H8.51"/><path d="M4 17 9.5 11.5C10.3 10.7 11.3 10.7 12.1 11.5L20 19.4"/></svg>`,
})
export class ImagenIcon {
  @Input() size: number | string = 24;
  @Input() color = 'currentColor';
}
