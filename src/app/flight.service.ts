import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Flight} from "./shared/models/flight.model";
import {Observable} from "rxjs";
import {contentHeaders} from "./http-config";
import {environment} from "../environments/environment";

@Injectable({
  providedIn: "root",
})
export class FlightService {
  // private apiUrl = 'http://localhost:8085'


  constructor(private httpClient: HttpClient) {
  }

  getAllFlights(): Observable<[Flight]> {
    return this.httpClient.get<[Flight]>(environment.backendUrl + '/allFlights', {headers: contentHeaders})
  }
}
