// angular element is implemented as Angular Component.
// its the @angular/elements package that will register it as
// the custom HTML Tag using injector service

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

// no 'selector' property because this component will be used as Element

@Component({
  templateUrl: './app.datagrid.view.html',
})
export class DataGridElementComponent implements OnInit {
  message: string;
  private dataSource: Array<any>;
  headers: Array<string>;
  @Output()
  rowClick: EventEmitter<any>;
  constructor() {
    this.message = 'The Angular Grid Element';
    this.dataSource = new Array<any>();
    this.headers = new Array<string>();
    this.rowClick  = new EventEmitter<any>();
  }
  ngOnInit(): void { }
  @Input()
  set DataSource(value: Array<any>) {
     if (value.length > 0) {
       this.dataSource = value;
       for (const p in this.dataSource[0]) {
         this.headers.push(p);
       }
     } else {
       this.dataSource  = new Array<any>();
     }
  }

  get DataSource(): Array<any> {
    return this.dataSource;
  }

  onRowClick(row: any): void {
    console.log(`In Element Row Click ${JSON.stringify(row)}`);
    this.rowClick.emit(row);
  }
}
