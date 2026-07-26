import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'ci-correo',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<svg xmlns="http://www.w3.org/2000/svg" [attr.width]="size" [attr.height]="size" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" [style.color]="color"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7 12 13 21 7"/></svg>`,
})
export class CorreoIcon {
  @Input() size: number | string = 24;
  @Input() color = 'currentColor';
}
