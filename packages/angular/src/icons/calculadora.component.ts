import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'ci-calculadora',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<svg xmlns="http://www.w3.org/2000/svg" [attr.width]="size" [attr.height]="size" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" [style.color]="color"><rect x="5" y="2" width="14" height="20" rx="2"/><rect x="8" y="5" width="8" height="3" rx="0.5"/><path d="M8.5 12h.01"/><path d="M12 12h.01"/><path d="M15.5 12h.01"/><path d="M8.5 15.5h.01"/><path d="M12 15.5h.01"/><path d="M15.5 15.5h.01"/><path d="M8.5 19h.01"/><path d="M12 19h.01"/><path d="M15.5 19h.01"/></svg>`,
})
export class CalculadoraIcon {
  @Input() size: number | string = 24;
  @Input() color = 'currentColor';
}
