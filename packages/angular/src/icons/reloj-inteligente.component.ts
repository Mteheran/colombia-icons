import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'ci-reloj-inteligente',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<svg xmlns="http://www.w3.org/2000/svg" [attr.width]="size" [attr.height]="size" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" [style.color]="color"><rect x="6" y="6" width="12" height="12" rx="3"/><path d="M9 6V3.5h6V6"/><path d="M9 18v2.5h6V18"/><path d="M18 10.5h1.5"/></svg>`,
})
export class RelojInteligenteIcon {
  @Input() size: number | string = 24;
  @Input() color = 'currentColor';
}
