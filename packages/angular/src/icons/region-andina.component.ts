import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'ci-region-andina',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<svg xmlns="http://www.w3.org/2000/svg" [attr.width]="size" [attr.height]="size" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" [style.color]="color"><path d="M7,18.8s-1.1.9-1.1.8.5.5,1.9,1.2,1.5.8,1.7,0,.6-.6,1.3-1.1,1.4-1.3,1.8-1.5,1.3-.5,1.3-1.4,0-1.6.4-2,1.8-2.1,1.8-2.1,2.1-1.2,1.8-1.6.3-1.1.3-1.8-.8-.9-.8-1.7,0-1.5-.3-1.7-1.4-1.2-1-2.3.3-1,0-1-1,2.7-1.7,2.9-.4.2-1,.8-.9,1.4-1.4,1-1,.4-1.1.3-1-.1-1,1.1,1,2.2.8,3.2.5.4-.5,2.4-1,3.3-1.5,3.5c-.9.3-1.6.8-1.6.8Z"/></svg>`,
})
export class RegionAndinaIcon {
  @Input() size: number | string = 24;
  @Input() color = 'currentColor';
}
