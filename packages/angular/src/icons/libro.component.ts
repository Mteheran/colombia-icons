import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'ci-libro',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<svg xmlns="http://www.w3.org/2000/svg" [attr.width]="size" [attr.height]="size" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" [style.color]="color"><path d="M12 6.5V18.7"/><path d="M12 6.5C9.5 5.2 6.5 5 3.5 5.3V17.5C6.5 17.2 9.5 17.4 12 18.7"/><path d="M12 6.5C14.5 5.2 17.5 5 20.5 5.3V17.5C17.5 17.2 14.5 17.4 12 18.7"/></svg>`,
})
export class LibroIcon {
  @Input() size: number | string = 24;
  @Input() color = 'currentColor';
}
