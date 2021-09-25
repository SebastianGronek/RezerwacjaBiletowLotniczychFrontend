import {Routes} from "@angular/router";
import {UserAddComponent} from "./user-add/user-add.component";
import {FlightListComponent} from "./flight-list/flight-list.component";
import {UserListComponent} from "./user-list/user-list.component";

export const routerConfig: Routes = [
  {path: 'addUser', component:UserAddComponent},
  {path: 'allUsers', component:UserListComponent},
  {path: 'allFlights', component:FlightListComponent},
/*  {path: '', redirectTo: ""},*/
]
