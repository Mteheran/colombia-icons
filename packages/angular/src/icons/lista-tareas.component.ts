import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'ci-lista-tareas',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" [style.color]="color"><path d="M2.5 6 4 7.5 7 4"/><path d="M2.5 12 4 13.5 7 10"/><rect x="3" y="16" width="4" height="4" rx="1"/><path d="M11 6h10"/><path d="M11 12h10"/><path d="M11 18h10"/></svg>`,
})
export class ListaTareasIcon {
  @Input() size: number | string = 24;
  @Input() color = 'currentColor';
}
