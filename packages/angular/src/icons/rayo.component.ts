import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'ci-rayo',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<svg xmlns="http://www.w3.org/2000/svg" [attr.width]="size" [attr.height]="size" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" [style.color]="color"><path d="M4 14A1 1 0 0 1 3.22 12.37L13.12 2.17A0.5 0.5 0 0 1 13.98 2.63L12.06 8.65A1 1 0 0 0 13 10H20A1 1 0 0 1 20.78 11.63L10.88 21.83A0.5 0.5 0 0 1 10.02 21.37L11.94 15.35A1 1 0 0 0 11 14Z"/></svg>`,
})
export class RayoIcon {
  @Input() size: number | string = 24;
  @Input() color = 'currentColor';
}
