import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'ci-carpeta-abierta',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<svg xmlns="http://www.w3.org/2000/svg" [attr.width]="size" [attr.height]="size" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" [style.color]="color"><path d="M5.5 19 8 12.35A1.5 1.5 0 0 1 9.4 11.35H19.8A1.5 1.5 0 0 1 21.24 13.25L20.14 17.45A2 2 0 0 1 18.24 19H5.5A1.5 1.5 0 0 1 4 17.5V6.5A1.5 1.5 0 0 1 5.5 5H9L11 7H18.5A1.5 1.5 0 0 1 20 8.5V11.35"/></svg>`,
})
export class CarpetaAbiertaIcon {
  @Input() size: number | string = 24;
  @Input() color = 'currentColor';
}
