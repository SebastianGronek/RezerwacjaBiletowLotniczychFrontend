import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "./shared/models/user.model";
import {Observable} from "rxjs";
import {contentHeaders} from "./http-config";
import {environment} from "../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) {
  }

  create(user: User): Observable<User> {
    return this.httpClient.post<User>(environment.backendUrl + '/user/addUser', user, {headers: contentHeaders})
  }

  getAllUsers(): Observable<[User]> {
    return this.httpClient.get<[User]>(environment.backendUrl + '/user/allUsers', {headers: contentHeaders})
  }

  getById(id: number): Observable<User> {
    return this.httpClient.get<User>(environment.backendUrl + '/user/' + id, {headers: contentHeaders})
  }

  deleteUser(user: User): Observable<User> {
    return this.httpClient.delete<User>(environment.backendUrl + '/user/delete/' + user.userId, {headers: contentHeaders});
  }
}
