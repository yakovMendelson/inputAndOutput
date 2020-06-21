import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AllItemsComponent } from './comp/all-items/all-items.component';
import { ItemComponent } from './comp/all-items/item/item.component';
import { DetailsComponent } from './comp/all-items/details/details.component';


@NgModule({
  declarations: [
    AppComponent,
    AllItemsComponent,
    ItemComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
