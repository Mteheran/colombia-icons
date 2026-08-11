import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'ci-arepa-de-huevo',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<svg xmlns="http://www.w3.org/2000/svg" [attr.width]="size" [attr.height]="size" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" [style.color]="color"><path d="M16.9,6.9c2.5,1,3.9,2.5,3.9,4.4s-.8,3.8-3,4.7c-2.5,1-4.1,1.3-7.5.9-4.6-.6-7.5-2.5-7.5-5.6s1.1-3,1.9-3.4" /><path d="M20,9c.3.3.5.7.7,1.1.9,2.2.8,4.6-.5,6.4s-4.4,2.6-7.6,2.6-6.4-1.2-7.3-1.8c-1.8-1.1-2.5-2.5-2.5-3.4v-2.1" /><path d="M4.7,10.4c-.2-2.1,1.9-5.1,5.8-5.6,3.9-.5,7.8,1.9,7.5,5.7" /><path d="M17,13s-2.2,2.4-7.7,1" /></svg>`,
})
export class ArepaDeHuevoIcon {
  @Input() size: number | string = 24;
  @Input() color = 'currentColor';
}
