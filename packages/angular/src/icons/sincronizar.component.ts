import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'ci-sincronizar',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<svg xmlns="http://www.w3.org/2000/svg" [attr.width]="size" [attr.height]="size" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" [style.color]="color"><path d="M3 11V10a4 4 0 0 1 4-4h14"/><path d="m17 2 4 4-4 4"/><path d="M21 13v1a4 4 0 0 1-4 4H3"/><path d="m7 22-4-4 4-4"/></svg>`,
})
export class SincronizarIcon {
  @Input() size: number | string = 24;
  @Input() color = 'currentColor';
}
