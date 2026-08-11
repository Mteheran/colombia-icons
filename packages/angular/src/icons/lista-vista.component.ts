import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'ci-lista-vista',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<svg xmlns="http://www.w3.org/2000/svg" [attr.width]="size" [attr.height]="size" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" [style.color]="color"><circle cx="4.5" cy="6" r="1" fill="currentColor" stroke="none"/><path d="M9 6H20"/><circle cx="4.5" cy="12" r="1" fill="currentColor" stroke="none"/><path d="M9 12H20"/><circle cx="4.5" cy="18" r="1" fill="currentColor" stroke="none"/><path d="M9 18H20"/></svg>`,
})
export class ListaVistaIcon {
  @Input() size: number | string = 24;
  @Input() color = 'currentColor';
}
