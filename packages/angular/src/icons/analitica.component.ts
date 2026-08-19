import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'ci-analitica',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<svg xmlns="http://www.w3.org/2000/svg" [attr.width]="size" [attr.height]="size" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" [style.color]="color"><path d="M3 15A9 7 0 0 1 21 15"/><path d="M12 15l4.5-4"/><circle cx="12" cy="15" r="1" fill="currentColor" stroke="none"/></svg>`,
})
export class AnaliticaIcon {
  @Input() size: number | string = 24;
  @Input() color = 'currentColor';
}
