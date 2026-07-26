import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'ci-acordeon-vallenato',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<svg xmlns="http://www.w3.org/2000/svg" [attr.width]="size" [attr.height]="size" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" [style.color]="color"><rect x="2.8" y="5.5" width="5" height="13" rx="1.2"/><rect x="16.2" y="5.5" width="5" height="13" rx="1.2"/><path d="M7.8 7.2H16.2M7.8 16.8H16.2"/><path d="M9.9 7.2V16.8M12 7.2V16.8M14.1 7.2V16.8"/><circle cx="18.7" cy="9" r="0.55" fill="currentColor" stroke="none"/><circle cx="18.7" cy="12" r="0.55" fill="currentColor" stroke="none"/><circle cx="18.7" cy="15" r="0.55" fill="currentColor" stroke="none"/></svg>`,
})
export class AcordeonVallenatoIcon {
  @Input() size: number | string = 24;
  @Input() color = 'currentColor';
}
