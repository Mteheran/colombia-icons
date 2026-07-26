import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'ci-bateria-vertical-cargada',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<svg xmlns="http://www.w3.org/2000/svg" [attr.width]="size" [attr.height]="size" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" [style.color]="color"><rect x="6" y="5" width="12" height="17" rx="2"/><path d="M10.5 5V3H13.5V5"/><path d="M9 9.5H15M9 13.5H15M9 17.5H15"/></svg>`,
})
export class BateriaVerticalCargadaIcon {
  @Input() size: number | string = 24;
  @Input() color = 'currentColor';
}
