import { Component, OnInit } from '@angular/core';
import {Logic} from './model/logic';
import {Product} from  './model/app.product.model';

// selector: the property that reprsent the "CUSTOM-HTML-TAG", using
// whihc the component will be referred in html markup of index.html
// ot HTML Template of other component like User/Custom control
// templateUrl:(external HTML file) the HTML that will be rendered in browser when the
// the component is bootstrap
// template: Inline HTML
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
   name: string;
   header: string;
   url: string;
   private logic: Logic;
   products: Array<Product>;

   message: string;
   constructor(){
      this.name = 'Mahesh';
      this.header = 'The Component with Binding DEMOS';
      this.url = "https://www.webnethelper.com";
      this.logic = new Logic();
      this.products = new Array<Product>();
      this.message = '';
   }

   display(evt): void {
     // return the value attribute of the element
     // on which the event binding has done
     alert(evt.target.value);
     this.header = 'The Click Event';
   }
   ngOnInit(): void {
     this.products = this.logic.getProducts();
   }

   // to subscribe and read the data from the element's event
   // use the CustomEvent's detail property
   subscribe(event): void {
      this.message = `Data received from Element
      ${JSON.stringify(event.detail)}`;
   }
}
