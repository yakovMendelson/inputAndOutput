import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AllItemsComponent } from './comp/all-items/all-items.component';
import { ItemComponent } from './comp/all-items/item/item.component';
import { DetailsComponent } from './comp/all-items/details/details.component';
import { AddItemComponent } from './comp/all-items/add-item/add-item.component';


@NgModule({
  declarations: [
    AppComponent,
    AllItemsComponent,
    ItemComponent,
    DetailsComponent,
    AddItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
