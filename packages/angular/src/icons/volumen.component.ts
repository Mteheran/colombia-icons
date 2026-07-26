import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'ci-volumen',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<svg xmlns="http://www.w3.org/2000/svg" [attr.width]="size" [attr.height]="size" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" [style.color]="color"><path d="M3 10H6L11 5V19L6 14H3Z"/><path d="M15 9A4 4 0 0 1 15 15"/><path d="M18 6A9 9 0 0 1 18 18"/></svg>`,
})
export class VolumenIcon {
  @Input() size: number | string = 24;
  @Input() color = 'currentColor';
}
