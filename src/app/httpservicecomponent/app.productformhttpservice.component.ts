import {Component, OnInit} from '@angular/core';
import {Product} from '../model/app.product.model';
import {Categories, Manufacturers} from '../model/app.constants';
import { HttpServiceService } from '../services/app.http.service';

@Component({
  selector: 'app-productformhttpservice-component',
  templateUrl: './app.productformhttpservice.view.html'
})
export class ProductFormHttpServiceComponent implements OnInit {

  product: Product;
  products: Array<Product>;
  headers: Array<string>;
  status: string;

  // copy the constant arrays in local public arrays of the component
  categories = Categories;
  manufacturers = Manufacturers;

  constructor(private serve: HttpServiceService){
    this.product = new Product(0, '', '', '', '', '', 0);
    this.products = new Array<Product>();
    this.headers = new Array<string>();
    this.status = '';
  }

   ngOnInit(): void {
    for(let p in this.product) {
       this.headers.push(p);
    }
    this.loadData();
   }

   private loadData(): void {
     // call the method from the service and then subscribe to the Observable
     this.serve.getData().subscribe((response) => {
        this.products = response;
        this.status = 'Data received Succesfully';
     }, (error) => {
        this.status = `Error Occured ${error}`;
     });
   }

   clear(): void {
    this.product = new Product(0, '', '', '', '', '', 0);
   }
   save(): void {
     this.serve.postData(this.product).subscribe((response) => {
      this.product = response;
      this.status = 'Record Saved received Succesfully';
      this.products.push(this.product);
   }, (error) => {
      this.status = `Error Occured ${error}`;
   });
   }

   getSelectedProduct(prd: Product): void {
       this.product = Object.assign({}, prd);
   }
}
