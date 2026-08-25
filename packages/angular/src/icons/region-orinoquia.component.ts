import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'ci-region-orinoquia',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<svg xmlns="http://www.w3.org/2000/svg" [attr.width]="size" [attr.height]="size" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" [style.color]="color"><path d="M4.7,19.1s-.8.7-1.2,0,1.1-1.3,0-1.9-.7-1.8-.5-2,3.4-2.5,3.7-3.4.5-.7.9-1.1,1.1-.9,1.1-2,.9-.9,0-2-.4-1.9-.4-1.9c0,0,.1-.7.8.6s2.6,1.1,3.1,1.1.7-.6,1.5.2,2,1.5,2.3,1.7,1,.6,1.7.6,3-1.1,3.3-.6.2.8,0,1.6-.4,1.5-.7,2,.4,1.4-.2,1.8,0,.8-1.5.5-2,2.1-2.5.7,3.4-2,1.3-2-2.2,0-3.2.7.2,2.2-2.6,3-2.7,1.2-3.6,1.1-1.9,0-2-.3-.3-1.7-.4-.7-.2.7-.5,1.4l-.3.7Z"/></svg>`,
})
export class RegionOrinoquiaIcon {
  @Input() size: number | string = 24;
  @Input() color = 'currentColor';
}
