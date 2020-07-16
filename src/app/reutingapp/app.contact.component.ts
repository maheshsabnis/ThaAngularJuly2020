import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-component',
  template: `
     <h2>The Contact Component</h2>
     <div>
       <strong>{{message}}</strong>
     </div>
     <br/>
     <a [routerLink]="['product']">Product Form</a>
     <hr/>
     <router-outlet></router-outlet>
  `
})

export class ContactComponent implements OnInit {
  message: string;
  constructor() {
    this.message = 'This is the Contact Component.';
  }

  ngOnInit() { }
}
