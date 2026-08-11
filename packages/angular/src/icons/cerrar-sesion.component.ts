import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'ci-cerrar-sesion',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<svg xmlns="http://www.w3.org/2000/svg" [attr.width]="size" [attr.height]="size" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" [style.color]="color"><path d="M9 3H5A2 2 0 0 0 3 5V19A2 2 0 0 0 5 21H9"/><path d="M16 7L21 12L16 17"/><path d="M21 12H9"/></svg>`,
})
export class CerrarSesionIcon {
  @Input() size: number | string = 24;
  @Input() color = 'currentColor';
}
