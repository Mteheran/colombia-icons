import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'ci-monitor-editar',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<svg xmlns="http://www.w3.org/2000/svg" [attr.width]="size" [attr.height]="size" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" [style.color]="color"><rect x="2.5" y="4" width="19" height="13" rx="2"/><path d="M12 17v3"/><path d="M8 20h8"/><g transform="translate(12 10.5) scale(0.5) translate(-11.5 -12)" stroke-width="3"><path d="M16 4L19 7L9 17L4 20L6 14Z"/></g></svg>`,
})
export class MonitorEditarIcon {
  @Input() size: number | string = 24;
  @Input() color = 'currentColor';
}
