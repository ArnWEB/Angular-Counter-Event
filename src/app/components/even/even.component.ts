import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-even',
  standalone: true,
  imports: [],
  templateUrl: './even.component.html',
  styleUrl: './even.component.css',
})
export class EvenComponent {
  @Input()
  element!: number;
}
