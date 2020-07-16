import { NgModule } from '@angular/core';
import { UtilityComponent } from './components/app.utiliy.component';
// CommonModule, will be used to provide the component
// from external modules to the Root Angular application
// so that BrowserModule can render it.
import {CommonModule} from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

// define the child routing
const routes: Routes = [
  {
    path: '', component: UtilityComponent
  }
];


@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  declarations: [UtilityComponent]
})
export class LazyModule { }
