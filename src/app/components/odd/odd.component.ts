import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-odd',
  standalone: true,
  imports: [],
  templateUrl: './odd.component.html',
  styleUrl: './odd.component.css',
})
export class OddComponent {
  @Input()
  element!: number;
}
