import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'ci-maximizar-2-flechas',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<svg xmlns="http://www.w3.org/2000/svg" [attr.width]="size" [attr.height]="size" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" [style.color]="color"><path d="M15.5 4H20V8.5"/><path d="M20 4 13 11"/><path d="M8.5 20H4V15.5"/><path d="M4 20 11 13"/></svg>`,
})
export class Maximizar2FlechasIcon {
  @Input() size: number | string = 24;
  @Input() color = 'currentColor';
}
