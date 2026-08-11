import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'ci-microfono-estudio',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<svg xmlns="http://www.w3.org/2000/svg" [attr.width]="size" [attr.height]="size" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" [style.color]="color"><rect x="8.5" y="2.5" width="7" height="13" rx="3.5"/><path d="M11 5.5H13"/><path d="M11 8H13"/><path d="M11 10.5H13"/><path d="M12 15.5V19"/><path d="M8.5 19H15.5"/></svg>`,
})
export class MicrofonoEstudioIcon {
  @Input() size: number | string = 24;
  @Input() color = 'currentColor';
}
