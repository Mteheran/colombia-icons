import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'ci-nube',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<svg xmlns="http://www.w3.org/2000/svg" [attr.width]="size" [attr.height]="size" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" [style.color]="color"><path d="M6.8 18a4.8 4.8 0 1 1 1.7 -9.2a4.2 4.2 0 0 1 7.8 1.1a3.5 3.5 0 0 1 -0.3 8.1Z" /></svg>`,
})
export class NubeIcon {
  @Input() size: number | string = 24;
  @Input() color = 'currentColor';
}
