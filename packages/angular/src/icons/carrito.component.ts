import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'ci-carrito',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<svg xmlns="http://www.w3.org/2000/svg" [attr.width]="size" [attr.height]="size" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" [style.color]="color"><path d="M2.5 3.5H5L7.5 15H18.5L20.5 7H6.2"/><circle cx="9" cy="18.5" r="1.4"/><circle cx="17.5" cy="18.5" r="1.4"/></svg>`,
})
export class CarritoIcon {
  @Input() size: number | string = 24;
  @Input() color = 'currentColor';
}
