import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'ci-iniciar-sesion',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<svg xmlns="http://www.w3.org/2000/svg" [attr.width]="size" [attr.height]="size" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" [style.color]="color"><path d="M15 3H19A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H15"/><path d="M10 7L15 12L10 17"/><path d="M15 12H3"/></svg>`,
})
export class IniciarSesionIcon {
  @Input() size: number | string = 24;
  @Input() color = 'currentColor';
}
