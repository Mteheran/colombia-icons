import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'ci-ordenar',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<svg xmlns="http://www.w3.org/2000/svg" [attr.width]="size" [attr.height]="size" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" [style.color]="color"><path d="M7 4V20"/><path d="M4 7L7 4L10 7"/><path d="M17 20V4"/><path d="M14 17L17 20L20 17"/></svg>`,
})
export class OrdenarIcon {
  @Input() size: number | string = 24;
  @Input() color = 'currentColor';
}
