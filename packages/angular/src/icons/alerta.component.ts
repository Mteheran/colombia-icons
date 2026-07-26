import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'ci-alerta',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<svg xmlns="http://www.w3.org/2000/svg" [attr.width]="size" [attr.height]="size" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" [style.color]="color"><path d="M12 4L21 20H3Z"/><path d="M12 9V14M12 17V17.01"/></svg>`,
})
export class AlertaIcon {
  @Input() size: number | string = 24;
  @Input() color = 'currentColor';
}
