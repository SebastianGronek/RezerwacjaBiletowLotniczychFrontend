import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FlightListComponent} from './flight-list/flight-list.component';
import {UserAddComponent} from './user-add/user-add.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {routerConfig} from "./router-config.config";
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    AppComponent,
    FlightListComponent,
    UserAddComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routerConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
