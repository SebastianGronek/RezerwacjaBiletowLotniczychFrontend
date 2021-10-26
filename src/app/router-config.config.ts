import {Routes} from "@angular/router";
import {UserAddComponent} from "./user-add/user-add.component";
import {FlightListComponent} from "./flight-list/flight-list.component";
import {UserListComponent} from "./user-list/user-list.component";
import {UserComponent} from "./user/user.component";
import {UpdateUserComponent} from "./update-user/update-user.component";
import {FlightFindComponent} from "./flight-find/flight-find.component";
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {ProfileComponent} from "./profile/profile.component";
import {BoardUserComponent} from "./board-user/board-user.component";
import {BoardModeratorComponent} from "./board-moderator/board-moderator.component";
import {BoardAdminComponent} from "./board-admin/board-admin.component";

export const routerConfig: Routes = [
  {path: 'user/addUser', component:UserAddComponent},
  {path: 'user/allUsers', component:UserListComponent},
  {path: 'user/delete/:id', component: UserListComponent},
  {path: 'user/update/:id', component: UpdateUserComponent},
  {path: 'user/:id', component: UserComponent},
  {path: 'allFlights', component:FlightListComponent},
  {path: 'findFlight', component:FlightFindComponent},
  // { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'user', component: BoardUserComponent },
  { path: 'moderator', component: BoardModeratorComponent },
  { path: 'admin', component: BoardAdminComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }

/*  {path: '', redirectTo: ""},*/
]
