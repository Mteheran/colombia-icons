import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'ci-selva-amazonica',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<svg xmlns="http://www.w3.org/2000/svg" [attr.width]="size" [attr.height]="size" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" [style.color]="color"><path d="M6.2,2.8s4.8,0,5.2,2.1-1.6,2.2-1.3,3,3,0,5.1.4,1.7,2.3.5,3.6-3.7,2-5.7,2.8-1.4,4,2.4,2.4,6.1-6.7,10.2-5.1"/><path d="M22.3,14.2s-2-1.3-4.2,1.3c-2.1,2.4-4,5.4-7.4,5.6-5.1.3-6.6-3.6-5.3-6.3s9.6-4.3,7.4-4.5-4,0-4.8-.1-2.3-1.4-.7-3,.6-.6.9-.8c2-1.4-2.5-1.2-3.1-1.3"/><path d="M1.4,14.9l.6-.5c.2-.2.6-.2.8,0l.6.6"/><path d="M13.2,3.9l.6-.5c.2-.2.6-.2.8,0l.6.6"/><path d="M17.3,6.7l.6-.5c.2-.2.6-.2.8,0l.6.6"/><path d="M18.7,3.9l.6-.5c.2-.2.6-.2.8,0l.6.6"/><path d="M3.6,11.9l.6-.5c.2-.2.6-.2.8,0l.6.6"/><path d="M1.4,8.8l.6-.5c.2-.2.6-.2.8,0l.6.6"/><path d="M20.4,9.6l.6-.5c.2-.2.6-.2.8,0l.6.6"/><path d="M16.5,20.8l.6-.5c.2-.2.6-.2.8,0l.6.6"/><path d="M19.7,17.9l.6-.5c.2-.2.6-.2.8,0l.6.6"/></svg>`,
})
export class SelvaAmazonicaIcon {
  @Input() size: number | string = 24;
  @Input() color = 'currentColor';
}
