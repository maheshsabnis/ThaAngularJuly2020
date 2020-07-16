import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-component',
  template:   `
    <h1>The Routing Application in Angular</h1>
    <table style='border:double;width:auto'>
      <tbody>
       <tr>
         <td>
          <a [routerLink]="['']">Home</a>
         </td>
         <td>
           <!--The Route Expresion with the parameter in URL-->
          <a [routerLink]="['about', id]">About</a>
         </td>
         <td>
          <a [routerLink]="['contact']">Contact</a>
         </td>
         <td>
          <a [routerLink]="['lazy']">Lazy</a>
         </td>
       </tr>
      </tbody>
    </table>
    <hr/>
    <router-outlet></router-outlet>
  `
})
export class MainComponent implements OnInit {
  id: number;
  constructor() {
    this.id = 1000;
  }

  ngOnInit(): void { }
}
