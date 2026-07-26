import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'ci-musica',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<svg xmlns="http://www.w3.org/2000/svg" [attr.width]="size" [attr.height]="size" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" [style.color]="color"><ellipse cx="7" cy="18" rx="2.5" ry="2"/><ellipse cx="15.5" cy="14.5" rx="2.5" ry="2"/><path d="M9.5 18V6.5C12 4.9 15.5 4.3 18 3.5V14.5"/></svg>`,
})
export class MusicaIcon {
  @Input() size: number | string = 24;
  @Input() color = 'currentColor';
}
