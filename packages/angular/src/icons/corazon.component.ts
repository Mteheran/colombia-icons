import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'ci-corazon',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<svg xmlns="http://www.w3.org/2000/svg" [attr.width]="size" [attr.height]="size" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" [style.color]="color"><path d="M12 20.5C12 20.5 3 14.5 3 8.5C3 5.5 5.3 3.5 8 3.5C10 3.5 11.3 4.8 12 6C12.7 4.8 14 3.5 16 3.5C18.7 3.5 21 5.5 21 8.5C21 14.5 12 20.5 12 20.5Z"/></svg>`,
})
export class CorazonIcon {
  @Input() size: number | string = 24;
  @Input() color = 'currentColor';
}
