import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tabledirective-component',
  templateUrl: './app.tablesirective.view.html'
})
export class TableDirectiveComponent implements OnInit {
  private dataSource: Array<any>;
  headers: Array<string>;
  color: string;
  @Output()
  rowClick: EventEmitter<any>;
  constructor() {
    this.dataSource = new Array<any>();
    this.headers  = new Array<string>();
    this.rowClick  = new EventEmitter<any>();
    this.color = '';
  }

  ngOnInit(): void { }
  @Input()
  set DataSource(value: Array<any>) {
    if (value.length > 0) {
      this.dataSource = value;
      for(const p in this.dataSource[0]) {
        this.headers.push(p);
      }
    }
  }

  get DataSource(): Array<any> {
    return this.dataSource;
  }

  onRowClick(row: any): void {
    this.rowClick.emit(row);
  }
}
