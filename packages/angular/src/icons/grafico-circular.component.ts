import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'ci-grafico-circular',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<svg xmlns="http://www.w3.org/2000/svg" [attr.width]="size" [attr.height]="size" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" [style.color]="color"><circle cx="12" cy="12" r="9"/><path d="M12 12V3"/><path d="M12 12h9"/></svg>`,
})
export class GraficoCircularIcon {
  @Input() size: number | string = 24;
  @Input() color = 'currentColor';
}
