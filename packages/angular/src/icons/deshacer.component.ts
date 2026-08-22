import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'ci-deshacer',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<svg xmlns="http://www.w3.org/2000/svg" [attr.width]="size" [attr.height]="size" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" [style.color]="color"><path d="M4 8h11a5 5 0 0 1 0 10H9"/><path d="M8 4 4 8l4 4"/></svg>`,
})
export class DeshacerIcon {
  @Input() size: number | string = 24;
  @Input() color = 'currentColor';
}
