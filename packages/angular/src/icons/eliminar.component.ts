import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'ci-eliminar',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<svg xmlns="http://www.w3.org/2000/svg" [attr.width]="size" [attr.height]="size" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" [style.color]="color"><path d="M9 7V4H15V7 M5 7H19 M6 7L7 19H17L18 7 M10 10V16 M14 10V16"/></svg>`,
})
export class EliminarIcon {
  @Input() size: number | string = 24;
  @Input() color = 'currentColor';
}
