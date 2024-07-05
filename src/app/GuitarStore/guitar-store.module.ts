import { NgModule } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ContactComponent,
    HomeComponent,
    ProductsComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    ContactComponent,
    HomeComponent,
    ProductsComponent
  ]
})
export class GuitarStoreModule { }
