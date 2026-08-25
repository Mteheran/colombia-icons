import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'ci-guacharaca',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<svg xmlns="http://www.w3.org/2000/svg" [attr.width]="size" [attr.height]="size" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" [style.color]="color"><path d="M11.1,6.7c4.2,2.9,5.7,4.5,6.8,6.3,1.9,3.1,1.6,7.2-1.3,8.6s-5.6,0-6.9-3.4-.6-2.4-.8-3.8"/><path d="M7.7,9.3c0-.2-.2-.4-.3-.5-1.3-2-3-4-1.5-5s1.9.3,3.1,1.4"/><rect x="7.4" y="1.5" width="2.3" height="19.1" rx="1.2" ry="1.2" transform="translate(3.6 -2) rotate(16.7)"/><path d="M15.7,10.5s-1.7,0-3,1.8"/><path d="M17.2,12.9s-1.7,0-3,1.8"/><path d="M18.3,15.2s-1.7,0-3,1.8"/></svg>`,
})
export class GuacharacaIcon {
  @Input() size: number | string = 24;
  @Input() color = 'currentColor';
}
