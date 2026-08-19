import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'ci-grafico-barras',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<svg xmlns="http://www.w3.org/2000/svg" [attr.width]="size" [attr.height]="size" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" [style.color]="color"><path d="M4 4v16h16"/><path d="M8 16v-4"/><path d="M13 16V8"/><path d="M18 16v-6"/></svg>`,
})
export class GraficoBarrasIcon {
  @Input() size: number | string = 24;
  @Input() color = 'currentColor';
}
