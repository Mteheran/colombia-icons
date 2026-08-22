import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'ci-documento',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<svg xmlns="http://www.w3.org/2000/svg" [attr.width]="size" [attr.height]="size" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" [style.color]="color"><rect x="5" y="3" width="14" height="18" rx="2"/><path d="M9 7.5h6"/><path d="M9 11h6"/><path d="M9 14.5h6"/><path d="M9 18h3.5"/></svg>`,
})
export class DocumentoIcon {
  @Input() size: number | string = 24;
  @Input() color = 'currentColor';
}
