import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'ci-campana-sonando',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<svg xmlns="http://www.w3.org/2000/svg" [attr.width]="size" [attr.height]="size" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" [style.color]="color"><path d="M7 10A5 5 0 0 1 17 10C17 15.5 19 17 19 17H5C5 17 7 15.5 7 10Z"/><path d="M10.5 17A1.5 1.5 0 0 0 13.5 17"/><path d="M4 8A5 5 0 0 1 5.5 4.5"/><path d="M20 8A5 5 0 0 0 18.5 4.5"/></svg>`,
})
export class CampanaSonandoIcon {
  @Input() size: number | string = 24;
  @Input() color = 'currentColor';
}
