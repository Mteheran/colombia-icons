import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'ci-enlace',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<svg xmlns="http://www.w3.org/2000/svg" [attr.width]="size" [attr.height]="size" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" [style.color]="color"><path d="M10 17H7A5 5 0 0 1 7 7H10"/><path d="M14 7H17A5 5 0 0 1 17 17H14"/><path d="M8 12H16"/></svg>`,
})
export class EnlaceIcon {
  @Input() size: number | string = 24;
  @Input() color = 'currentColor';
}
