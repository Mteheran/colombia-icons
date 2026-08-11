import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'ci-maletin',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<svg xmlns="http://www.w3.org/2000/svg" [attr.width]="size" [attr.height]="size" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" [style.color]="color"><rect x="3" y="7" width="18" height="13" rx="2"/><path d="M9 7V5.5A2 2 0 0 1 11 3.5H13A2 2 0 0 1 15 5.5V7"/><path d="M3 13H21"/><rect x="10.5" y="11.75" width="3" height="2.5" rx="0.5"/></svg>`,
})
export class MaletinIcon {
  @Input() size: number | string = 24;
  @Input() color = 'currentColor';
}
