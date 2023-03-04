import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  template: `
    <button>
      {{ value }}
    </button>
  `,
  styles: [
    `
      button {
        font-size: 4rem;
        height: 100%;
        width: 100%;
      }
    `,
  ],
})
export class SquareComponent {
  @Input() value: 'X' | 'O' | undefined;
}
