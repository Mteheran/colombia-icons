import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'ci-region-caribe',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<svg xmlns="http://www.w3.org/2000/svg" [attr.width]="size" [attr.height]="size" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" [style.color]="color"><path d="M2.5,17.5s1.2,1.4,1.4.6.5-1.8,0-2,1-1.3,1.4-1.7.6-1.6,1.3-1.6.7,0,.7-.8,0-.8,2.4-4c0,0,.6-.2,1.5.5s.6-1.2,1.4-1.2,1.4-.2,3.6-1.3,2.7-2.3,3.6-2.4,2.4.4,1.9,1.3-.6.6-1.4.9-1.5.4-1.8.7-.8,1.7-1.6,1.6-2.4,1.8-2.4,2.8,0,1.6-.4,2.1-.5,1.5-1,2.5-.4,0-1-.3-1.3,1.3-1.9,1.9-1.1,1.3-2,1.1-1.9-.8-2.2,0-2,1.5-2.1,1.7-1.4-.9-1.4-2.5Z"/></svg>`,
})
export class RegionCaribeIcon {
  @Input() size: number | string = 24;
  @Input() color = 'currentColor';
}
