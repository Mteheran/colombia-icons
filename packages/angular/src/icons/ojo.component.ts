import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'ci-ojo',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<svg xmlns="http://www.w3.org/2000/svg" [attr.width]="size" [attr.height]="size" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" [style.color]="color"><path d="M2 12C5.5 6.5 8.5 5 12 5C15.5 5 18.5 6.5 22 12C18.5 17.5 15.5 19 12 19C8.5 19 5.5 17.5 2 12Z"/><circle cx="12" cy="12" r="3"/></svg>`,
})
export class OjoIcon {
  @Input() size: number | string = 24;
  @Input() color = 'currentColor';
}
