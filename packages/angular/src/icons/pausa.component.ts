import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'ci-pausa',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<svg xmlns="http://www.w3.org/2000/svg" [attr.width]="size" [attr.height]="size" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" [style.color]="color"><rect x="8" y="5" width="3" height="14" rx="1.5"/><rect x="13" y="5" width="3" height="14" rx="1.5"/></svg>`,
})
export class PausaIcon {
  @Input() size: number | string = 24;
  @Input() color = 'currentColor';
}
