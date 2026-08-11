import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'ci-escudo',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<svg xmlns="http://www.w3.org/2000/svg" [attr.width]="size" [attr.height]="size" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" [style.color]="color"><path d="M12 2L20 5V12C20 18 12 22 12 22C12 22 4 18 4 12V5L12 2Z"/></svg>`,
})
export class EscudoIcon {
  @Input() size: number | string = 24;
  @Input() color = 'currentColor';
}
