// BrowserModule is used to load and render Angular Components and
// it dependencies in Browser
import { BrowserModule } from '@angular/platform-browser';

// CUSTOM_ELEMENTS_SCHEMA, this is used to inform the browser module
// that there exists some third party WebComponents / elements
// those will be rendered along with the Angular comoponents

import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
// HttpClientModule, manages the Http Platform for Http Communicaiton
import {HttpClientModule} from '@angular/common/http';


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
    LitElementComponent
  ],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule, HttpClientModule,
    AppRoutingModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [/*UtilityService*/], // singleton instance
  bootstrap: [LitElementComponent]
})
export class AppModule { }
