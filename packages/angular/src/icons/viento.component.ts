import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'ci-viento',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<svg xmlns="http://www.w3.org/2000/svg" [attr.width]="size" [attr.height]="size" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" [style.color]="color"><path d="M9.8 4.4A2 2 0 1 1 11 8H2"/><path d="M17.5 8a2.5 2.5 0 1 1 2 4H2"/><path d="M12.8 19.6A2 2 0 1 0 14 16H2"/></svg>`,
})
export class VientoIcon {
  @Input() size: number | string = 24;
  @Input() color = 'currentColor';
}
