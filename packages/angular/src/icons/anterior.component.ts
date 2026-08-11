import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'ci-anterior',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<svg xmlns="http://www.w3.org/2000/svg" [attr.width]="size" [attr.height]="size" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" [style.color]="color"><path d="M4 6v12" /><path d="M20 6l-7 6 7 6ZM13 6l-7 6 7 6Z" /></svg>`,
})
export class AnteriorIcon {
  @Input() size: number | string = 24;
  @Input() color = 'currentColor';
}
