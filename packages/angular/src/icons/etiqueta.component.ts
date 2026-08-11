import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'ci-etiqueta',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<svg xmlns="http://www.w3.org/2000/svg" [attr.width]="size" [attr.height]="size" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" [style.color]="color"><path d="M11.414 2.586A2 2 0 0 1 12.828 2H20a2 2 0 0 1 2 2v7.172a2 2 0 0 1 -0.586 1.414l-8.704 8.704a2.426 2.426 0 0 1 -3.42 0l-6.58 -6.58a2.426 2.426 0 0 1 0 -3.42z" /><circle cx="16.5" cy="7.5" r="1.1" /></svg>`,
})
export class EtiquetaIcon {
  @Input() size: number | string = 24;
  @Input() color = 'currentColor';
}
