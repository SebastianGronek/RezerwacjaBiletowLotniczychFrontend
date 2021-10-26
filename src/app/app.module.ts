import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FlightListComponent} from './flight-list/flight-list.component';
import {UserAddComponent} from './user-add/user-add.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {routerConfig} from "./router-config.config";
import {RouterModule} from "@angular/router";
import {UserListComponent} from './user-list/user-list.component';
import {UserComponent} from './user/user.component';
import {UpdateUserComponent} from './update-user/update-user.component';
import {FlightFindComponent} from './flight-find/flight-find.component';
import {MaterialModule} from "./material.module";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {MatOptionModule} from "@angular/material/core";
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {ProfileComponent} from './profile/profile.component';
import {BoardAdminComponent} from './board-admin/board-admin.component';
import {BoardModeratorComponent} from './board-moderator/board-moderator.component';
import {BoardUserComponent} from './board-user/board-user.component';

import {authInterceptorProviders} from './helpers/auth.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    FlightListComponent,
    UserAddComponent,
    UserListComponent,
    UserComponent,
    UpdateUserComponent,
    FlightFindComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    BoardAdminComponent,
    BoardModeratorComponent,
    BoardUserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routerConfig),
    MaterialModule,
    MatAutocompleteModule,
    MatOptionModule,
    ReactiveFormsModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule {
}
