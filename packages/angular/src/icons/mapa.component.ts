import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'ci-mapa',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<svg xmlns="http://www.w3.org/2000/svg" [attr.width]="size" [attr.height]="size" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" [style.color]="color"><path d="M9 4L3 6v14l6 -2 6 2 6 -2V4l-6 2z" /><path d="M9 4v14M15 6v14" /></svg>`,
})
export class MapaIcon {
  @Input() size: number | string = 24;
  @Input() color = 'currentColor';
}
