import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'ci-accesibilidad',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<svg xmlns="http://www.w3.org/2000/svg" [attr.width]="size" [attr.height]="size" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" [style.color]="color"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="7.5" r="0.7"/><path d="M10 16.5L12 13.5L14 16.5M12 13.5V11.5L15 10.5M9 10.5L12 11.5"/></svg>`,
})
export class AccesibilidadIcon {
  @Input() size: number | string = 24;
  @Input() color = 'currentColor';
}
