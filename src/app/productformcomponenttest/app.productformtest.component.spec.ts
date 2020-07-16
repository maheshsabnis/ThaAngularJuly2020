// import all the required object for Testing of Angular Component

import {TestBed, ComponentFixture, async} from '@angular/core/testing';
// FormsModule fot Two-way binding

import {FormsModule} from '@angular/forms';

import {ProductFormTestComponent} from './app.productformtest.component';
import {Product} from '../model/app.product.model';

// define a TestSuit

describe('ProductFormTestComponent', ()=> {
  // deing required objects
  let component: ProductFormTestComponent;
  // to detect any chanages at component
  let fixture: ComponentFixture<ProductFormTestComponent>;
  // define HTML Element Ref. to raise events
  let button: HTMLElement;

  // define the common objects to be used before each test case
  beforeEach(()=> {
    // create a TestBedCOnfiguration to load the Angular Env. in Test
    TestBed.configureTestingModule({
      declarations: [ProductFormTestComponent],
      imports: [FormsModule]
    }).compileComponents(); // compile the component with its dependencies (if any)
  });

  // define change monitoring on component
  beforeEach(() => {
    // initilize the component instance  with its selector and template
    fixture = TestBed.createComponent(ProductFormTestComponent);
    // get the instamnce
    component = fixture.componentInstance;
    console.log(`before each ${component}`);
    // trigger the default binding if any
    // also watch the changes in HTML elements
    fixture.detectChanges();
  });

  // write the test case
  it('should calculate tax based on price when save button is clicked',() => {
     const product = new Product(0, '', '', '', '', '', 0);
     product.BasePrice  = 4000;
     console.log(`Test Case ${component}`);
     component.product = product;
     // refer the DOM element to watch
     const nativeElement = fixture.nativeElement;
     // refer the button
     button = nativeElement.querySelector('.b1');
     // event definition
     const eventType = button.dispatchEvent(new Event('click'));
     fixture.detectChanges(); // monitor changes in HTML
     // assertion
     expect(nativeElement.querySelector('input[disabled]').value).toEqual('800');
  });

});
