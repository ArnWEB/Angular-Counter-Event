import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GamecontrolComponent } from './components/gamecontrol/gamecontrol.component';
import { OddComponent } from './components/odd/odd.component';
import { EvenComponent } from './components/even/even.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, GamecontrolComponent, OddComponent, EvenComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'databinging-assignment';
  count: number = 0;
  evenCountArray: number[] = [];
  oddCountArray: number[] = [];

  onStartClicked(event: number) {
    this.count = event;
    if (this.checkEven(this.count)) {
      this.evenCountArray.push(this.count);
    } else {
      this.oddCountArray.push(this.count);
    }
  }
  onEndClicked(event: number) {
    console.log(event);
  }
  checkEven(num: number) {
    if (num % 2 == 0) {
      return true;
    }
    return false;
  }
}
