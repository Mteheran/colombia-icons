import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'ci-campana',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<svg xmlns="http://www.w3.org/2000/svg" [attr.width]="size" [attr.height]="size" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" [style.color]="color"><path d="M6.5 9A5.5 5.5 0 0 1 17.5 9C17.5 15 20 17 20 17H4C4 17 6.5 15 6.5 9Z"/><path d="M10.5 17A1.5 1.5 0 0 0 13.5 17"/></svg>`,
})
export class CampanaIcon {
  @Input() size: number | string = 24;
  @Input() color = 'currentColor';
}
