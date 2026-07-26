import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'ci-comentario',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<svg xmlns="http://www.w3.org/2000/svg" [attr.width]="size" [attr.height]="size" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" [style.color]="color"><path d="M3 13.5A2.5 2.5 0 0 0 5.5 16H16L21 20V6.5A2.5 2.5 0 0 0 18.5 4H5.5A2.5 2.5 0 0 0 3 6.5Z"/></svg>`,
})
export class ComentarioIcon {
  @Input() size: number | string = 24;
  @Input() color = 'currentColor';
}
