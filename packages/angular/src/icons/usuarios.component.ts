import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'ci-usuarios',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<svg xmlns="http://www.w3.org/2000/svg" [attr.width]="size" [attr.height]="size" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" [style.color]="color"><circle cx="9.5" cy="8" r="3.5"/><path d="M3 20V18A6.5 6.5 0 0 1 16 18V20Z"/><path d="M12 5.55A3.5 3.5 0 1 1 14.5 11.5A6.5 6.5 0 0 1 21 18V20"/></svg>`,
})
export class UsuariosIcon {
  @Input() size: number | string = 24;
  @Input() color = 'currentColor';
}
