import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-litelement-component',
  templateUrl: './app.litelement.view.html'
})

export class LitElementComponent implements OnInit {
  message: string;
  receiveValue: string;
  v1: string;
  v2: string;
  constructor() {
    this.message = '';
    this.receiveValue = '';
    this.v1 = 'The Value 1 from Component';
    this.v2 = 'The Value 2 from Component';

  }

  onReceiveClickEvent(event): void {
      this.receiveValue = event.detail.message;
  }


  ngOnInit() { }
}
