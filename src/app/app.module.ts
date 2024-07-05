import { NgModule } from '@angular/core';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { AppComponent } from './app.component';
import { GuitarStoreModule } from './GuitarStore/guitar-store.module';
import { BrowserModule } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    GuitarStoreModule,
    RouterOutlet,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
