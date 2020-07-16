import {Component, OnInit} from '@angular/core';
import {Product} from '../model/app.product.model';
import { Logic } from '../model/logic';
import {Categories, Manufacturers} from '../model/app.constants';

@Component({
  selector: 'app-productformtest-component',
  templateUrl: './app.productformtest.view.html'
})
export class ProductFormTestComponent implements OnInit {

  product: Product;
  products: Array<Product>;
  private logic: Logic;
  headers: Array<string>;
  tax: number;

  // copy the constant arrays in local public arrays of the component
  categories = Categories;
  manufacturers = Manufacturers;

  constructor(){
    this.product = new Product(0, '', '', '', '', '', 0);
    this.products = new Array<Product>();
    this.logic = new Logic();
    this.headers = new Array<string>();
    this.tax = 0;
  }

  // this is method that will be invoked immediatly after the ctor execution
  // write the logic in this method that we cannot write in the ctor
  // e.g. External Service calls, long running iterations
   ngOnInit(): void {
    // read proeprties of Product class and add them in headers array

    for(let p in this.product) {
       this.headers.push(p);
    }
    this.products = this.logic.getProducts();

   }

   clear(): void {
    this.product = new Product(0, '', '', '', '', '', 0);
   }
   save(): void {
     this.products = this.logic.addProduct(this.product);
     this.tax = this.product.BasePrice * 0.2;
     console.log(JSON.stringify(this.products));
   }

   getSelectedProduct(eventData): void {
      this.product = Object.assign({}, eventData);
   }
}
