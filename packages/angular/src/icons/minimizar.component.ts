import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'ci-minimizar',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<svg xmlns="http://www.w3.org/2000/svg" [attr.width]="size" [attr.height]="size" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" [style.color]="color"><path d="M8 3V6A2 2 0 0 1 6 8H3"/><path d="M21 8H18A2 2 0 0 1 16 6V3"/><path d="M3 16H6A2 2 0 0 1 8 18V21"/><path d="M16 21V18A2 2 0 0 1 18 16H21"/></svg>`,
})
export class MinimizarIcon {
  @Input() size: number | string = 24;
  @Input() color = 'currentColor';
}
