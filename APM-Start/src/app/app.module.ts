import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {ProductListComponent} from '../app/products/product-list.component';
import {convertToSpace} from '../app/shared/convert-to-space';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    convertToSpace
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { } 
