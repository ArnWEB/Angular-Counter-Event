import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-gamecontrol',
  standalone: true,
  imports: [],
  templateUrl: './gamecontrol.component.html',
  styleUrl: './gamecontrol.component.css',
})
export class GamecontrolComponent {
  @Output() onStart = new EventEmitter<number>();
  @Output() onEnd = new EventEmitter<number>();
  num: number = 0;
  stop: boolean = false;
  nIntervId: any;
  incrementNumber() {
    this.num++;
  }
  startGame() {
    console.log('Start Clicked');
    this.stop = false;
    if (!this.stop) {
      this.nIntervId = setInterval(() => {
        this.num++;
        console.log('start Event Fired');
        this.onStart.emit(this.num);
      }, 1000);
    }
  }
  endGame() {
    this.stop = true;
    clearInterval(this.nIntervId);
    this.onEnd.emit(0);
  }
}
