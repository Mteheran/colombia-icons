import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'ci-candado',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<svg xmlns="http://www.w3.org/2000/svg" [attr.width]="size" [attr.height]="size" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" [style.color]="color"><path d="M8 11V8A4 4 0 0 1 16 8V11"/><path d="M6 11H18V20H6Z"/></svg>`,
})
export class CandadoIcon {
  @Input() size: number | string = 24;
  @Input() color = 'currentColor';
}
