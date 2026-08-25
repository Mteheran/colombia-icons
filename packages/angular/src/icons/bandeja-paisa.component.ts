import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'ci-bandeja-paisa',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<svg xmlns="http://www.w3.org/2000/svg" [attr.width]="size" [attr.height]="size" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" [style.color]="color"><path d="M20.6,8.1c.5.4,1,.8,1.4,1.2.9.8,1.7,3.2,0,4.7s-1.7,1.5-2.4,2.4-.4.6-.5.7c-1.5,2.1-4,3.4-6.8,3.4s-5.8-1.6-7.2-4.1-2-2.9-2-4.5,1.4-3.7,2.5-5.1,4-3.3,6.7-3.3,4.8,1.4,6.6,3.1.4.5,1.8,1.5Z"/><path d="M5.7,6.6s-2.1,2.1-3.5,2.7-1.8,2.3-.1,3.8,2.1,2.3,3,3.4"/><path d="M13.5,19.3c.8-.3,2-1.2,1.7-3-.4-2.7-2.8-3.1-3.9-2.7s-1,.4-1.3.5c-1.2.4-1.8,1.2-1.9,2.2s1.8,3.5,4.6,3.1c0,0,.3,0,.8-.2"/><circle cx="12.3" cy="16.5" r="1.4"/><path d="M10,14.2c-1.2.2-1.9-.2-2.3-.3-.9-.3-1.7-.8-2.2-1.9-.9-1.9,0-3.5,0-3.5l1.1.7s.5.3.7,1c.5,2.2,2.8,1.7,3.5.7,0,0,.2,0,2.6.4,0,0,0,.7-.7,1.9"/><path d="M6.6,6.7s.1-2.2,2-1.8c0,0,2.3-1.9,2.8,1.6,0,0,1.9,0,1.3,1.8,0,0,1.8.4,1,2.3"/><path d="M14,12.9s2.7,1.3,1.9,3.5,1.8,2.8,2.5.8.4-3.6-1.9-5.7c0,0-1.4-1.5-2.4-.6s0,2.1,0,2.1Z"/><path d="M17,11.5c.8-3-3.5-5-3.5-5,0,0-.2-1.3.7-2.2s7.3,2.1,5.8,8.6c0,0-.8,1.1-2,.3"/><line x1="18.6" y1="8.7" x2="19.3" y2="8.4"/><line x1="19.3" y1="10.6" x2="20.1" y2="10.6"/><line x1="17.6" y1="7" x2="18" y2="6.3"/><line x1="16.2" y1="5.6" x2="16.6" y2="4.9"/></svg>`,
})
export class BandejaPaisaIcon {
  @Input() size: number | string = 24;
  @Input() color = 'currentColor';
}
