import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'ci-nube-subir',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<svg xmlns="http://www.w3.org/2000/svg" [attr.width]="size" [attr.height]="size" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" [style.color]="color"><path d="M7 15.5a4.5 4.5 0 0 1 1.6 -8.7a4.2 4.2 0 0 1 7.8 1.1a3.3 3.3 0 0 1 1 6.5" /><path d="M12 19v-7M9 15l3 -3 3 3" /></svg>`,
})
export class NubeSubirIcon {
  @Input() size: number | string = 24;
  @Input() color = 'currentColor';
}
