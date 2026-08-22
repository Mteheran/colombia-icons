import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'ci-bandeja-entrada',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<svg xmlns="http://www.w3.org/2000/svg" [attr.width]="size" [attr.height]="size" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" [style.color]="color"><path d="M4 13h4l2 3h4l2-3h4"/><path d="M6.4 5h11.2a2 2 0 0 1 1.9 1.36L22 13v4a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-4l2.5-6.64A2 2 0 0 1 6.4 5Z"/></svg>`,
})
export class BandejaEntradaIcon {
  @Input() size: number | string = 24;
  @Input() color = 'currentColor';
}
