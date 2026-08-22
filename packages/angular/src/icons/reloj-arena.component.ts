import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'ci-reloj-arena',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<svg xmlns="http://www.w3.org/2000/svg" [attr.width]="size" [attr.height]="size" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" [style.color]="color"><path d="M6 5h12"/><path d="M6 19h12"/><path d="M8 5c0 4 3 5.5 3 7s-3 3-3 7"/><path d="M16 5c0 4-3 5.5-3 7s3 3 3 7"/></svg>`,
})
export class RelojArenaIcon {
  @Input() size: number | string = 24;
  @Input() color = 'currentColor';
}
