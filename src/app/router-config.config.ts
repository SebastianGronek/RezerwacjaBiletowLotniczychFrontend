import {Routes} from "@angular/router";
import {UserAddComponent} from "./user-add/user-add.component";
import {FlightListComponent} from "./flight-list/flight-list.component";
import {UserListComponent} from "./user-list/user-list.component";
import {UserComponent} from "./user/user.component";

export const routerConfig: Routes = [
  {path: 'user/addUser', component:UserAddComponent},
  {path: 'user/allUsers', component:UserListComponent},
  {path: 'user/delete/:id', component: UserListComponent},
  {path: 'user/:id', component: UserComponent},
  {path: 'allFlights', component:FlightListComponent},

/*  {path: '', redirectTo: ""},*/
]
