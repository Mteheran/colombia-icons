import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'ci-microfono',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<svg xmlns="http://www.w3.org/2000/svg" [attr.width]="size" [attr.height]="size" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" [style.color]="color"><rect x="9" y="2.5" width="6" height="12" rx="3"/><path d="M5.5 11V12A6.5 6.5 0 0 0 18.5 12V11"/><path d="M12 18.5V21"/><path d="M8.5 21H15.5"/></svg>`,
})
export class MicrofonoIcon {
  @Input() size: number | string = 24;
  @Input() color = 'currentColor';
}
