import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Web1Component } from './web1/web1.component';
import { Web2Component } from './web2/web2.component';
import { Baitap2Component } from './baitap2/baitap2.component';

@NgModule({
  declarations: [
    AppComponent,
    Web1Component,
    Web2Component,
    Baitap2Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
