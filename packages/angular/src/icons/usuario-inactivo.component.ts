import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'ci-usuario-inactivo',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<svg xmlns="http://www.w3.org/2000/svg" [attr.width]="size" [attr.height]="size" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" [style.color]="color"><circle cx="9" cy="8" r="3.5"/><path d="M2.5 20V18A6.5 6.5 0 0 1 15.5 18V20Z"/><path d="M17.5 5v6"/><path d="M20.5 5v6"/></svg>`,
})
export class UsuarioInactivoIcon {
  @Input() size: number | string = 24;
  @Input() color = 'currentColor';
}
