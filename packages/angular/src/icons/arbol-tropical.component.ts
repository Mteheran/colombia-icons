import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'ci-arbol-tropical',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<svg xmlns="http://www.w3.org/2000/svg" [attr.width]="size" [attr.height]="size" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" [style.color]="color"><path d="M9.8 16A3 3 0 0 1 7.05 12.3A3 3 0 0 1 7.35 7.45A3 3 0 0 1 12 3.75A3 3 0 0 1 16.6 7.45A3 3 0 0 1 16.9 12.3A3 3 0 0 1 14 16H9.8Z"/><path d="M12 21V8.5"/><path d="M12 13.5 9.9 11.4M12 12 14.1 9.9"/></svg>`,
})
export class ArbolTropicalIcon {
  @Input() size: number | string = 24;
  @Input() color = 'currentColor';
}
