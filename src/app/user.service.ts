import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "./shared/models/user.model";
import {Observable} from "rxjs";
import {contentHeaders} from "./http-config";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private backendUrl = 'http://localhost:8085'

  constructor(private httpClient: HttpClient) {
  }

  create(user: User): Observable<User> {
    return this.httpClient.post<User>(this.backendUrl + '/addUser', user, {headers: contentHeaders})
  }
}
