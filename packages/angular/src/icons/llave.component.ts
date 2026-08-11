import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'ci-llave',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<svg xmlns="http://www.w3.org/2000/svg" [attr.width]="size" [attr.height]="size" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" [style.color]="color"><circle cx="8" cy="16" r="5"/><path d="M11.5 12.5L21 3"/><path d="M16.25 7.75L18.75 10.25"/><path d="M20.5 3.5L23 6"/></svg>`,
})
export class LlaveIcon {
  @Input() size: number | string = 24;
  @Input() color = 'currentColor';
}
