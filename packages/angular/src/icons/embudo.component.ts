import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'ci-embudo',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<svg xmlns="http://www.w3.org/2000/svg" [attr.width]="size" [attr.height]="size" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" [style.color]="color"><path d="M3 5H21L15 19H9Z"/><path d="M5.1 10H18.9"/><path d="M6.9 14H17.1"/></svg>`,
})
export class EmbudoIcon {
  @Input() size: number | string = 24;
  @Input() color = 'currentColor';
}
