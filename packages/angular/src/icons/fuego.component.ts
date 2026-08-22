import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'ci-fuego',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<svg xmlns="http://www.w3.org/2000/svg" [attr.width]="size" [attr.height]="size" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" [style.color]="color"><path d="M12 2.2C13.5 4.6 14.8 7.2 14.6 9.8C15.4 8.4 16.5 7.6 17.5 7.2C18.7 9.2 19.2 11.6 19.2 14.2A7.2 7.2 0 0 1 4.8 14.2C4.8 11.6 5.3 9.2 6.5 7.2C7.5 7.6 8.6 8.4 9.4 9.8C9.2 7.2 10.5 4.6 12 2.2Z"/></svg>`,
})
export class FuegoIcon {
  @Input() size: number | string = 24;
  @Input() color = 'currentColor';
}
