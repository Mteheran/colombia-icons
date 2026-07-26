import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'ci-inicio',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<svg xmlns="http://www.w3.org/2000/svg" [attr.width]="size" [attr.height]="size" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" [style.color]="color"><path d="M3 10.5 12 3 21 10.5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19Z"/><path d="M14.8 21V14.5A1.5 1.5 0 0 0 13.3 13H10.7A1.5 1.5 0 0 0 9.2 14.5V21"/></svg>`,
})
export class InicioIcon {
  @Input() size: number | string = 24;
  @Input() color = 'currentColor';
}
