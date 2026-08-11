import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'ci-interrogacion',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<svg xmlns="http://www.w3.org/2000/svg" [attr.width]="size" [attr.height]="size" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" [style.color]="color"><circle cx="12" cy="12" r="9"/><path d="M9.6 9.4A2.5 2.5 0 1 1 12 12.7V14"/><path d="M12 17H12.01"/></svg>`,
})
export class InterrogacionIcon {
  @Input() size: number | string = 24;
  @Input() color = 'currentColor';
}
