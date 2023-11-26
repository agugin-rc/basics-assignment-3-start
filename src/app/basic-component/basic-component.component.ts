import { Component } from '@angular/core';

@Component({
  selector: 'app-basic-component',
  templateUrl: './basic-component.component.html',
  styleUrl: './basic-component.component.css'
})
export class BasicComponentComponent {
  isDetailsVisible = false;
  logNumber: number = 0;
  logs: number [] = [];

  toggleDetailsVisibility() {
    this.isDetailsVisible = !this.isDetailsVisible;
    this.logNumber++;
    this.logs.push(this.logNumber);
    console.log(this.logs);
  }
}
