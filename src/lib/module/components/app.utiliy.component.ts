import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-utility-component',
  template: `
     <h2>The Utiltity Component from Library Module</h2>
     <div>
       <strong>{{data}}</strong>
     </div>
  `
})

export class UtilityComponent implements OnInit {
  data: string;
  constructor() {
    this.data  = 'The Utility Data';
  }

  ngOnInit() { }
}
