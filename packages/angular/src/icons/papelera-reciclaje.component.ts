import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'ci-papelera-reciclaje',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<svg xmlns="http://www.w3.org/2000/svg" [attr.width]="size" [attr.height]="size" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" [style.color]="color"><ellipse cx="12" cy="6" rx="7" ry="2"/><path d="M5 6l2.5 14h9L19 6"/><path d="M9 9.5l.5 7"/><path d="M12 9.5v7"/><path d="M15 9.5l-.5 7"/></svg>`,
})
export class PapeleraReciclajeIcon {
  @Input() size: number | string = 24;
  @Input() color = 'currentColor';
}
