import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'ci-idioma',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<svg xmlns="http://www.w3.org/2000/svg" [attr.width]="size" [attr.height]="size" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" [style.color]="color"><path d="M2 5h12"/><path d="M7 2h1"/><path d="m4 14 6-6 2-3"/><path d="m5 8 6 6"/><path d="m22 22-5-10-5 10"/><path d="M14 18h6"/></svg>`,
})
export class IdiomaIcon {
  @Input() size: number | string = 24;
  @Input() color = 'currentColor';
}
