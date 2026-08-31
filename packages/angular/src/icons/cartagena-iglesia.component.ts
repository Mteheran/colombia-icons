import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'ci-cartagena-iglesia',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<svg xmlns="http://www.w3.org/2000/svg" [attr.width]="size" [attr.height]="size" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" [style.color]="color"><rect x="2.1" y="15" width="19.8" height="6.8"/><rect x="9.3" y="8.4" width="5.4" height="6.6"/><rect x="10.2" y="6.4" width="3.5" height="2"/><polygon points="11 6.4 12.1 2.3 13 6.4 11 6.4"/><circle cx="12" cy="11.4" r="1.2"/><path d="M4.4,21.3v-2.7c0-.9.7-1.7,1.7-1.7h0c.9,0,1.7.7,1.7,1.7v2.7"/><path d="M10.3,21.3v-2.7c0-.9.7-1.7,1.7-1.7h0c.9,0,1.7.7,1.7,1.7v2.7"/><path d="M16.3,21.3v-2.7c0-.9.7-1.7,1.7-1.7h0c.9,0,1.7.7,1.7,1.7v2.7"/></svg>`,
})
export class CartagenaIglesiaIcon {
  @Input() size: number | string = 24;
  @Input() color = 'currentColor';
}
