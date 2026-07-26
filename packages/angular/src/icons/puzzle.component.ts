import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'ci-puzzle',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<svg xmlns="http://www.w3.org/2000/svg" [attr.width]="size" [attr.height]="size" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" [style.color]="color"><path d="M3.25 7.75H8.25A2.5 2.5 0 1 1 11.25 7.75H16.25V12.75A2.5 2.5 0 1 1 16.25 15.75V20.75H3.25Z"/></svg>`,
})
export class PuzzleIcon {
  @Input() size: number | string = 24;
  @Input() color = 'currentColor';
}
