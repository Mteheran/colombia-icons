import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'ci-reenviar',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<svg xmlns="http://www.w3.org/2000/svg" [attr.width]="size" [attr.height]="size" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" [style.color]="color"><path d="M15 17 20 12l-5-5"/><path d="M20 12H9a5 5 0 0 0-5 5v2"/></svg>`,
})
export class ReenviarIcon {
  @Input() size: number | string = 24;
  @Input() color = 'currentColor';
}
