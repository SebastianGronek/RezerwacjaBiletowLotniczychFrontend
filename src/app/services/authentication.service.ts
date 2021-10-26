import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from "../../environments/environment";

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class Authentication {


  constructor(private http: HttpClient) {
  }

  login(login: string, password: string): Observable<any> {
    return this.http.post(environment.backendUrl + '/auth' + '/signin', {
      login,
      password
    }, httpOptions);
  }

  register(login: string, email: string, password: string): Observable<any> {
    return this.http.post(environment.backendUrl + '/auth' + '/signup', { //czy tu jest potrzebny ukośnik do ścieżki?
      login,
      email,
      password
    }, httpOptions);
  }
}
