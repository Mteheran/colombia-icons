import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'ci-bug',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<svg xmlns="http://www.w3.org/2000/svg" [attr.width]="size" [attr.height]="size" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" [style.color]="color"><rect x="8" y="7" width="8" height="12" rx="4"/><path d="M12 7.5V18.5"/><path d="M10 7L8.5 4.5"/><path d="M14 7L15.5 4.5"/><path d="M8 10L4.5 8"/><path d="M8 13H4"/><path d="M8 16L4.5 18"/><path d="M16 10L19.5 8"/><path d="M16 13H20"/><path d="M16 16L19.5 18"/></svg>`,
})
export class BugIcon {
  @Input() size: number | string = 24;
  @Input() color = 'currentColor';
}
