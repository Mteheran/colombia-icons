import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'ci-ojo-cerrado',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<svg xmlns="http://www.w3.org/2000/svg" [attr.width]="size" [attr.height]="size" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" [style.color]="color"><path d="M2 11C5 15 8.5 16.5 12 16.5C15.5 16.5 19 15 22 11"/><path d="M3.4 16.2L4.5 14.2"/><path d="M7.4 18.1L8 15.9"/><path d="M12 18.7V16.5"/><path d="M16.6 18.1L16 15.9"/><path d="M20.6 16.2L19.5 14.2"/></svg>`,
})
export class OjoCerradoIcon {
  @Input() size: number | string = 24;
  @Input() color = 'currentColor';
}
