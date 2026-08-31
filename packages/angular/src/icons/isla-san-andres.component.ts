import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'ci-isla-san-andres',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<svg xmlns="http://www.w3.org/2000/svg" [attr.width]="size" [attr.height]="size" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" [style.color]="color"><path d="M8.6,17.3s-.3,1.7-.7,2.3-.6.7-.3,1.8.5,1.2.8,1.4,1.1-.9,1.4-2,2.2-2.9,2.1-4.1-.3-1.9,0-2.4,1.4-1.9,1-2.5.1-1.7.7-1.3c1,.8-.2-1.7-.3-2.2,0,0-.8-1.7.5-1.8s1-1.8,1-1.8l1.6-.8s-.4-.9-1.6-1.4-1.4-1-1.7-1.2-1,1.2-2.2,1.8-1.5,1.1-1.4,2.3c0,1.9-.3,1.9-.3,1.9,0,0-.9.8-1.1,1.8s.2,1.6.2,1.6c0,0-.9,2.2-1.1,2.4s.7,1,1.3,1.2,0,3.2,0,3.2Z"/></svg>`,
})
export class IslaSanAndresIcon {
  @Input() size: number | string = 24;
  @Input() color = 'currentColor';
}
