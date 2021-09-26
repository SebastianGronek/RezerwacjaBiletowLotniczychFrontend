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


  constructor(private httpClient: HttpClient) {
  }

  getAllFlights(): Observable<[Flight]> {
    return this.httpClient.get<[Flight]>(environment.backendUrl + '/allFlights', {headers: contentHeaders})
  }


  getChosenFlights(startingLocation: Text, destination: Text, dateOfFlight: Text): Observable<[Flight]> {
    const params = {
      'startingLocation': startingLocation,
      'destination': destination,
      'dateOfFlight': dateOfFlight
    }
    return this.httpClient.get<[Flight]>(environment.backendUrl + '/findFlight', {params:params}, {headers: contentHeaders})
  }
}
