import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'ci-medellin-metro',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<svg xmlns="http://www.w3.org/2000/svg" [attr.width]="size" [attr.height]="size" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" [style.color]="color"><path d="M11.6,7.8l-1.6.8-1.1,5.8-2.4,1.4v2.3h5l11.3-2.6s.4-2.8-.7-4.9l-10.6-2.8Z"/><path d="M11.6,7.8s-6.3-1.2-8.9.4c0,0-2.5,2.7-1.3,8.4v1.4c0,0,5.1.1,5.1.1"/><polyline points="1.4 14.1 3.2 15.8 3.2 17.7"/><path d="M3.7,9.7s-.8,1.6-.8,2.9h4.4c0-.1.4-3.1.4-3.1l-4.1.2Z"/><polyline points="9.3 17.8 12.3 14.8 22.9 13.6"/><polygon points="13.5 10.4 13.5 12.8 20.8 12.1 20.8 12.1 13.5 10.4"/></svg>`,
})
export class MedellinMetroIcon {
  @Input() size: number | string = 24;
  @Input() color = 'currentColor';
}
