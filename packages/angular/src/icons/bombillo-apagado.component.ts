import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'ci-bombillo-apagado',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<svg xmlns="http://www.w3.org/2000/svg" [attr.width]="size" [attr.height]="size" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" [style.color]="color"><path d="M9 16A5 5 0 1 1 15 16A3.5 3.5 0 0 0 14 19A2 2 0 0 1 10 19A3.5 3.5 0 0 0 9 16Z"/><path d="M9.7 17H14.3"/></svg>`,
})
export class BombilloApagadoIcon {
  @Input() size: number | string = 24;
  @Input() color = 'currentColor';
}
