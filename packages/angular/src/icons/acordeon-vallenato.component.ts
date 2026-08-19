import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'ci-acordeon-vallenato',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<svg xmlns="http://www.w3.org/2000/svg" [attr.width]="size" [attr.height]="size" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" [style.color]="color"><path d="M2.7,6.8l4.5-1.4,4.1,13.2-4.5,1.4c-1,.3-1.9-.3-2.1-1.1L1.6,8.9c-.3-1,.3-1.9,1.1-2.1Z" /><path d="M14.7,17.8l5.6-10.9,1.4.7c.9.5,1.1,1.5.7,2.3l-4,7.7c-.4.8-1.4,1.2-2.2.9s-1.5-.7-1.5-.7Z" /><polyline points="12.1 11.1 12.7 4 15.4 5.7 13.6 17.7 11.8 18.3 12.6 17.3 11.6 5.1 9 4.2 9.4 12.5" /><polyline points="14.7 10.9 16.6 4.3 18.9 6.1 14.7 17.7 11.8 18.3" /><circle cx="5.9" cy="8.5" r="1" fill="currentColor" stroke="none" /><circle cx="6.8" cy="11.2" r="1" fill="currentColor" stroke="none" /><circle cx="7.7" cy="13.9" r="1" fill="currentColor" stroke="none" /><circle cx="8.6" cy="16.7" r="1" fill="currentColor" stroke="none" /><circle cx="6.2" cy="15.9" r="1" fill="currentColor" stroke="none" /><circle cx="5.2" cy="13.2" r="1" fill="currentColor" stroke="none" /><circle cx="4.2" cy="10.5" r="1" fill="currentColor" stroke="none" /></svg>`,
})
export class AcordeonVallenatoIcon {
  @Input() size: number | string = 24;
  @Input() color = 'currentColor';
}
