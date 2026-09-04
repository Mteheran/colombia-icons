import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'ci-aleatorio',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<svg xmlns="http://www.w3.org/2000/svg" [attr.width]="size" [attr.height]="size" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" [style.color]="color"><path d="M3 7H6A5 5 0 0 1 11 12A5 5 0 0 0 16 17H21"/><path d="M21 7H16A5 5 0 0 0 13 8.2"/><path d="M9 15.8A5 5 0 0 1 6 17H3"/><path d="M18 4 21 7 18 10"/><path d="M18 20 21 17 18 14"/></svg>`,
})
export class AleatorioIcon {
  @Input() size: number | string = 24;
  @Input() color = 'currentColor';
}
