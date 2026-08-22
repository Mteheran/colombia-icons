import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'ci-rehacer',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<svg xmlns="http://www.w3.org/2000/svg" [attr.width]="size" [attr.height]="size" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" [style.color]="color"><path d="M20 8H9a5 5 0 0 0 0 10h6"/><path d="M16 4l4 4-4 4"/></svg>`,
})
export class RehacerIcon {
  @Input() size: number | string = 24;
  @Input() color = 'currentColor';
}
