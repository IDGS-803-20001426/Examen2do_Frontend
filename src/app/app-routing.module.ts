import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './GuitarStore/home/home.component';
import { ProductsComponent } from './GuitarStore/products/products.component';
import { ContactComponent } from './GuitarStore/contact/contact.component';
 
 
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'contact', component: ContactComponent }
];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }