import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'ci-enter',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<svg xmlns="http://www.w3.org/2000/svg" [attr.width]="size" [attr.height]="size" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" [style.color]="color"><path d="M19 5V11A4 4 0 0 1 15 15H6"/><path d="M10 11 6 15 10 19"/></svg>`,
})
export class EnterIcon {
  @Input() size: number | string = 24;
  @Input() color = 'currentColor';
}
