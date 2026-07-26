import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'ci-bateria-horizontal-cargada',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<svg xmlns="http://www.w3.org/2000/svg" [attr.width]="size" [attr.height]="size" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" [style.color]="color"><rect x="2" y="6" width="17" height="12" rx="2"/><path d="M19 10.5H21V13.5H19"/><path d="M6.5 9V15M10.5 9V15M14.5 9V15"/></svg>`,
})
export class BateriaHorizontalCargadaIcon {
  @Input() size: number | string = 24;
  @Input() color = 'currentColor';
}
