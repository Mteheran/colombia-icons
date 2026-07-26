import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'ci-emoji',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<svg xmlns="http://www.w3.org/2000/svg" [attr.width]="size" [attr.height]="size" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" [style.color]="color"><circle cx="12" cy="12" r="9"/><path d="M8.5 10H8.51"/><path d="M15.5 10H15.51"/><path d="M8.5 14.2A4.5 4.5 0 0 0 15.5 14.2"/></svg>`,
})
export class EmojiIcon {
  @Input() size: number | string = 24;
  @Input() color = 'currentColor';
}
