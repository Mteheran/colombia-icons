import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'ci-salto-del-tequendama',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<svg xmlns="http://www.w3.org/2000/svg" [attr.width]="size" [attr.height]="size" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" [style.color]="color"><circle cx="11.1" cy="16.4" r=".7"/><circle cx="18" cy="17.9" r=".7"/><circle cx="16.8" cy="16.4" r=".7"/><circle cx="6.6" cy="17.2" r=".7"/><path d="M16.8,21c-.9-3.8-4-2.1-4-2.1-2.6-1.6-3.6,1-3.6,1-2.3-1-2.6,1.1-2.6,1.1"/><polyline points="9.1 19.7 10 3.5 13 3.5 13.9 18.5"/><line x1="11.2" y1="14.5" x2="11.4" y2="8.1"/><path d="M9.9,4.5s-2.1-1-2.8-1.3-1.1-.2-1.7,0-1.6,1.4-1.6,1.4l-2.6,3.2"/><path d="M13.8,4.8s1.3-.2,2.5-1.3,1.1-.3,1.7,0,1.5.6,1.9.6,1.6,2,2.2,3"/><path d="M15.6,12.7c.8-1.2-.4-2.5,1.7-2.9s1.8-.7,2.2-1.3,1-.6,1.5-.3c.7.4,1.7,1,1.8,1.2"/><path d="M6.6,13.9l-2.4-1.5c-.7-.5-1.6-.4-2.3.3l-.8.7"/></svg>`,
})
export class SaltoDelTequendamaIcon {
  @Input() size: number | string = 24;
  @Input() color = 'currentColor';
}
