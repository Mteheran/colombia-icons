import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'ci-refrescar',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<svg xmlns="http://www.w3.org/2000/svg" [attr.width]="size" [attr.height]="size" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" [style.color]="color"><path d="M20 11A8 8 0 0 0 5 8.5"/><path d="M5 4V9H10"/><path d="M4 13A8 8 0 0 0 19 15.5"/><path d="M19 20V15H14"/></svg>`,
})
export class RefrescarIcon {
  @Input() size: number | string = 24;
  @Input() color = 'currentColor';
}
