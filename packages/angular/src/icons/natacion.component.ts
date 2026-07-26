import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'ci-natacion',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<svg xmlns="http://www.w3.org/2000/svg" [attr.width]="size" [attr.height]="size" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" [style.color]="color"><circle cx="15.8" cy="9.3" r="1.2"/><path d="M6.5 11.8 10.5 9 14 12 9.5 14.5"/><path d="M3 17Q4.5 15.7 6 17T9 17T12 17T15 17T18 17T21 17"/></svg>`,
})
export class NatacionIcon {
  @Input() size: number | string = 24;
  @Input() color = 'currentColor';
}
