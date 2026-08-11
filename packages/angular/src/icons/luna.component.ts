import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'ci-luna',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<svg xmlns="http://www.w3.org/2000/svg" [attr.width]="size" [attr.height]="size" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" [style.color]="color"><path d="M12 3A6 6 0 0 0 21 12A9 9 0 1 1 12 3Z"/></svg>`,
})
export class LunaIcon {
  @Input() size: number | string = 24;
  @Input() color = 'currentColor';
}
