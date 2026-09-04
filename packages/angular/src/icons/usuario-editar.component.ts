import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'ci-usuario-editar',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<svg xmlns="http://www.w3.org/2000/svg" [attr.width]="size" [attr.height]="size" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" [style.color]="color"><circle cx="9" cy="8" r="3.5"/><path d="M2.5 20V18A6.5 6.5 0 0 1 15.5 18V20Z"/><g transform="translate(18.6 8.5) scale(0.42) translate(-11.5 -12)" stroke-width="3.57"><path d="M16 4L19 7L9 17L4 20L6 14Z"/></g></svg>`,
})
export class UsuarioEditarIcon {
  @Input() size: number | string = 24;
  @Input() color = 'currentColor';
}
