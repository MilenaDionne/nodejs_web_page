import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AddressListComponent } from './address-list/address-list.component';
import { AddressViewComponent } from './address-view/address-view.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {AddressListElementComponent} from './address-list/address-list-element/address-list-element.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AddressListElementComponent,
    AddressListComponent,
    AddressViewComponent,
    AddressListElementComponent
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
