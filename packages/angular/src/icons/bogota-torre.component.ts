import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'ci-bogota-torre',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<svg xmlns="http://www.w3.org/2000/svg" [attr.width]="size" [attr.height]="size" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" [style.color]="color"><polygon points="18.6 3.6 12 6.1 5.4 3.6 12 1.2 18.6 3.6"/><polyline points="12 6.1 12 23 5.4 20.5 5.4 3.6"/><polyline points="12 23 18.6 20 18.6 3.6"/><line x1="14.3" y1="5.5" x2="14.3" y2="9.5"/><line x1="16.5" y1="4.7" x2="16.5" y2="8.7"/><line x1="14.3" y1="11.9" x2="14.3" y2="15.9"/><line x1="16.5" y1="11.1" x2="16.5" y2="15.1"/><line x1="14.3" y1="17.8" x2="14.3" y2="21.8"/><line x1="16.5" y1="17" x2="16.5" y2="21"/><line x1="9.6" y1="5.5" x2="9.6" y2="9.6"/><line x1="7.4" y1="4.8" x2="7.4" y2="8.8"/><line x1="9.6" y1="11.9" x2="9.6" y2="15.9"/><line x1="7.4" y1="11.2" x2="7.4" y2="15.2"/><line x1="9.6" y1="17.8" x2="9.6" y2="21.8"/><line x1="7.4" y1="17.1" x2="7.4" y2="21.1"/><polyline points="16 2.7 12 4.1 8 2.7"/></svg>`,
})
export class BogotaTorreIcon {
  @Input() size: number | string = 24;
  @Input() color = 'currentColor';
}
