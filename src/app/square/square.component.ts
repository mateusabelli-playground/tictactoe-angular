import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  template: `
    <button
      mat-flat-button
      disableRipple="true"
      [color]="value === 'X' ? 'accent' : value === 'O' ? 'primary' : ''"
    >
      {{ value }}
    </button>
  `,
  styles: [
    `
      button {
        font-size: 4rem;
        min-height: 100%;
        min-width: 100%;
      }
    `,
  ],
})
export class SquareComponent {
  @Input() value: 'X' | 'O' | undefined;
}
