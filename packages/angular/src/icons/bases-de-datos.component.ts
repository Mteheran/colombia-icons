import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'ci-bases-de-datos',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<svg xmlns="http://www.w3.org/2000/svg" [attr.width]="size" [attr.height]="size" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" [style.color]="color"><ellipse cx="8" cy="5" rx="5" ry="2"/><path d="M3 5v14a5 2 0 0 0 10 0V5"/><path d="M3 12a5 2 0 0 0 10 0"/><ellipse cx="17.5" cy="11" rx="2.8" ry="1.3"/><path d="M14.7 11v8a2.8 1.3 0 0 0 5.6 0V11"/><path d="M14.7 15a2.8 1.3 0 0 0 5.6 0"/></svg>`,
})
export class BasesDeDatosIcon {
  @Input() size: number | string = 24;
  @Input() color = 'currentColor';
}
