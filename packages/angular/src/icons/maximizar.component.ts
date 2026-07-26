import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'ci-maximizar',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<svg xmlns="http://www.w3.org/2000/svg" [attr.width]="size" [attr.height]="size" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" [style.color]="color"><path d="M8 3H5A2 2 0 0 0 3 5V8"/><path d="M21 8V5A2 2 0 0 0 19 3H16"/><path d="M3 16V19A2 2 0 0 0 5 21H8"/><path d="M16 21H19A2 2 0 0 0 21 19V16"/></svg>`,
})
export class MaximizarIcon {
  @Input() size: number | string = 24;
  @Input() color = 'currentColor';
}
