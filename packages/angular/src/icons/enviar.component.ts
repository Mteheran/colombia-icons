import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'ci-enviar',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<svg xmlns="http://www.w3.org/2000/svg" [attr.width]="size" [attr.height]="size" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" [style.color]="color"><path d="M22 2L15 22L11 13L2 9L22 2Z"/><path d="M22 2L11 13"/></svg>`,
})
export class EnviarIcon {
  @Input() size: number | string = 24;
  @Input() color = 'currentColor';
}
