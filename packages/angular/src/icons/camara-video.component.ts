import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'ci-camara-video',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<svg xmlns="http://www.w3.org/2000/svg" [attr.width]="size" [attr.height]="size" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" [style.color]="color"><rect x="2.5" y="6.5" width="13" height="11" rx="2"/><path d="M15.5 13.5 21.5 16V8L15.5 10.5"/></svg>`,
})
export class CamaraVideoIcon {
  @Input() size: number | string = 24;
  @Input() color = 'currentColor';
}
