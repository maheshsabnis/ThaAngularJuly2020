// BrowserModule is used to load and render Angular Components and
// it dependencies in Browser
import { BrowserModule } from '@angular/platform-browser';

// CUSTOM_ELEMENTS_SCHEMA, this is used to inform the browser module
// that there exists some third party WebComponents / elements
// those will be rendered along with the Angular comoponents

import { NgModule, CUSTOM_ELEMENTS_SCHEMA, Injector } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
// HttpClientModule, manages the Http Platform for Http Communicaiton
import {HttpClientModule} from '@angular/common/http';
// createCustomElement: used to define custom element
import {createCustomElement} from '@angular/elements';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ProductFormComponent} from './productformcomponent/app.productform.component';
import { ProductReactiveFormComponent } from './productreactiveformcomponent/app.productreactiveform.component';
import { CategoryMasterComponent } from './masterdetails/app.categorymaster.component';
import { ProductChildComponent } from './masterdetails/app.productchaild.component';
import { UtilityService } from './services/app.utility.service';
import { UtilityServiceComponent } from './serviceComponents/app.utilityservice.component';
import { CategorySenderComponent } from './masterdetailservice/app.categorysender.component';
import { ProductReceiverComponent } from './masterdetailservice/app.productreceiver.component';
import { ProductFormHttpServiceComponent } from './httpservicecomponent/app.productformhttpservice.component';
import { SecureCallComponent } from './securecallcomponent/app.securecall.component';
import { TableDirectiveComponent } from './customdirectives/tabledirectivecomponent/app.tabledirective.component';
import { ColorDirective } from './customdirectives/colordirective/app.color.directive';
import { LitElementComponent } from './litElementsDemos/litelemntswebcomponents/app.litelement.component';

// import custom WebComponent Elements here
import './litElementsDemos/mylitelements/app.sample.litelement';

// import the component to be used as Element
import { DataGridElementComponent } from './elementsdemo/app.datagrid.element';
import { MainComponent } from './reutingapp/app.main.component';
import { HomeComponent } from './reutingapp/app.home.component';
import { ContactComponent } from './reutingapp/app.contact.component';
import { AboutComponent } from './reutingapp/app.about.component';
import { ProductFormTestComponent } from './productformcomponenttest/app.productformtest.component';


@NgModule({
  declarations: [
    AppComponent, ProductFormComponent,
    ProductReactiveFormComponent,
    CategoryMasterComponent, ProductChildComponent,
    UtilityServiceComponent,
    CategorySenderComponent, ProductReceiverComponent,
    ProductFormHttpServiceComponent,
    SecureCallComponent,
    TableDirectiveComponent, ColorDirective,
    LitElementComponent,
    DataGridElementComponent,
    HomeComponent, AboutComponent, ContactComponent,
    MainComponent,
    ProductFormTestComponent
  ],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule, HttpClientModule,
    AppRoutingModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [/*UtilityService*/], // singleton instance
  // this proeprty of NgModule will expose the registered
  // Angular Component as Element to the DOM Execution process
  // so that it will be instantiated and Propertis and Events
  // will be availabe for DOM
  entryComponents: [DataGridElementComponent],
  // the Angular Boundry where the Component will be loaded
  // and executed by the BrowserModule
  bootstrap: [ProductFormTestComponent]
})
export class AppModule {
  // register the Angular Component as Custom Angular Element
  // the 'Injector' service will perform the Custom Elemebnt
  // registeration by defing custom tag for Angular Component
  // to bes used as Element

  constructor(private injectctor: Injector) {
    const dataGridElement = createCustomElement(
      DataGridElementComponent,
      {injector: this.injectctor}
    );

    // define the custom tag for the dataGridElement
    // so that it can be used in DOM
    customElements.define('app-datagrid-element', dataGridElement);
  }

}
