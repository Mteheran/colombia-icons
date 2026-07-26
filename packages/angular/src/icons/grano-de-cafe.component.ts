import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'ci-grano-de-cafe',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<svg xmlns="http://www.w3.org/2000/svg" [attr.width]="size" [attr.height]="size" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" [style.color]="color"><g transform="rotate(35 12 12)"><ellipse cx="12" cy="12" rx="4.8" ry="7.8"/><path d="M12 4.6C10.2 8 13.8 16 12 19.4"/></g></svg>`,
})
export class GranoDeCafeIcon {
  @Input() size: number | string = 24;
  @Input() color = 'currentColor';
}
