import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './reutingapp/app.home.component';
import { AboutComponent } from './reutingapp/app.about.component';
import { ContactComponent } from './reutingapp/app.contact.component';
import { ProductFormComponent } from './productformcomponent/app.productform.component';

// the routing table
const routes: Routes = [
   {path: '', component: HomeComponent}, // default route
   {path: 'about/:id', component: AboutComponent}, // with route parameter
   {path: 'contact', component: ContactComponent,
    children: [
      {
        path: 'product', component: ProductFormComponent
      }
    ]},
    {
        path: 'lazy', loadChildren: () => import('./../lib/module/app.lazy.module').then(m => m.LazyModule)
    },
   {path: '**', redirectTo: '' } // if not URI match redirect to default route
];

@NgModule({
  // the table is registered at root of the application
  // for the NgModule that will import the 'AppRoutingModule'
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
