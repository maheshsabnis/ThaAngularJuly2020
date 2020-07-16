import { Component, OnInit } from '@angular/core';

import {Router} from '@angular/router';

@Component({
  selector: 'app-home-component',
  template: `
     <h2>The Home Component</h2>
     <div>
       <strong>{{message}}</strong>
     </div>
     <br/>
     <input type="text" [(ngModel)]="id" />
     <!-- <div>{{id}}</div> -->
     <br/>
     <input type="button" value="Navigate to About" (click)="navigateToAbout()"/>
  `
})

export class HomeComponent implements OnInit {
  message: string;
  id: number;
  // inject the Router
  constructor(private router: Router) {
    this.message = 'This is the Home Component.';
    this.id = 0;
  }

  ngOnInit() { }

  navigateToAbout(): void {
    alert(this.id);
    this.router.navigate(['about', this.id]);
  }
}
