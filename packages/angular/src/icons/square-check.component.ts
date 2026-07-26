import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'ci-square-check',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<svg xmlns="http://www.w3.org/2000/svg" [attr.width]="size" [attr.height]="size" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" [style.color]="color"><rect x="3" y="3" width="18" height="18" rx="3"/><path d="M8 12.5 10.8 15.3 16 9.5"/></svg>`,
})
export class SquareCheckIcon {
  @Input() size: number | string = 24;
  @Input() color = 'currentColor';
}
