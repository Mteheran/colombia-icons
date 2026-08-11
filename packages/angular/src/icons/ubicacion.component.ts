import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'ci-ubicacion',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<svg xmlns="http://www.w3.org/2000/svg" [attr.width]="size" [attr.height]="size" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" [style.color]="color"><path d="M12 21C8 16.5 5 13.2 5 10A7 7 0 1 1 19 10C19 13.2 16 16.5 12 21Z"/><circle cx="12" cy="10" r="3"/></svg>`,
})
export class UbicacionIcon {
  @Input() size: number | string = 24;
  @Input() color = 'currentColor';
}
