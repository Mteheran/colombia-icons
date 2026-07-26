import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'ci-mundo',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<svg xmlns="http://www.w3.org/2000/svg" [attr.width]="size" [attr.height]="size" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" [style.color]="color"><circle cx="12" cy="12" r="9"/><path d="M12 3a13 13 0 0 0 0 18a13 13 0 0 0 0-18"/><path d="M3 12h18"/></svg>`,
})
export class MundoIcon {
  @Input() size: number | string = 24;
  @Input() color = 'currentColor';
}
