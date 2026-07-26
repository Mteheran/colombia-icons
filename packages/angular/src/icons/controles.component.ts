import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'ci-controles',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<svg xmlns="http://www.w3.org/2000/svg" [attr.width]="size" [attr.height]="size" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" [style.color]="color"><path d="M4 6H15"/><circle cx="17" cy="6" r="2"/><circle cx="7" cy="12" r="2"/><path d="M9 12H20"/><path d="M4 18H15"/><circle cx="17" cy="18" r="2"/></svg>`,
})
export class ControlesIcon {
  @Input() size: number | string = 24;
  @Input() color = 'currentColor';
}
