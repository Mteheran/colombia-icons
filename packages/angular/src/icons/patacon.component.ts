import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'ci-patacon',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<svg xmlns="http://www.w3.org/2000/svg" [attr.width]="size" [attr.height]="size" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" [style.color]="color"><path d="M11.1,10.5s0,.1-.1.1-.1,0-.1-.1,0-.1.1-.1.1,0,.1.1Z" /><path d="M13.6,12s0,.1-.1.1-.1,0-.1-.1,0-.1.1-.1.1,0,.1.1Z" /><path d="M11.3,13.1s0,.1-.1.1-.1,0-.1-.1,0-.1.1-.1.1,0,.1.1Z" /><path d="M12.1,7.1c2.6,0,4.8,2.1,4.8,4.8s-2.1,4.8-4.8,4.8" /><path d="M19.8,17.1c1-1.5,1.6-3.3,1.6-5.2s-.2-2.3-.6-3.3-.6-1-1.1-1.4-.7-.8-.9-1.2-.5-1.1-1-1.5-.7-.5-1-.7c-.8-.5-1.7-.5-2.6-.2s-1.9-.1-2.3-.3c-.8-.5-1.7-.7-2.6-.5-2.3.7-4.3,2.2-5.5,4.2s-.5,1.8-.2,2.7-.1,2-.3,2.4c-.5.8-.7,1.7-.5,2.6.5,1.5,1.3,2.9,2.4,4h0c.9,0,1.8.5,2.3,1.2s.8.9,1.3,1.1c1,.3,2,.5,3.1.5,1.8,0,3.5-.5,5-1.4,0,0,.1-3,2.9-3Z" /></svg>`,
})
export class PataconIcon {
  @Input() size: number | string = 24;
  @Input() color = 'currentColor';
}
