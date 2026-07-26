import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'ci-codigo',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<svg xmlns="http://www.w3.org/2000/svg" [attr.width]="size" [attr.height]="size" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" [style.color]="color"><rect x="3" y="3.5" width="18" height="17" rx="2"/><path d="M10 8 6 12 10 16"/><path d="M14 8 18 12 14 16"/></svg>`,
})
export class CodigoIcon {
  @Input() size: number | string = 24;
  @Input() color = 'currentColor';
}
