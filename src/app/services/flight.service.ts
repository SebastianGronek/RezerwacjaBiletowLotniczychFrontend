import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Flight} from "../shared/models/flight.model";
import {Observable} from "rxjs";
import {contentHeaders} from "../http-config";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: "root",
})
export class FlightService {


  constructor(private httpClient: HttpClient) {
  }

  getAllFlights(): Observable<[Flight]> {
    return this.httpClient.get<[Flight]>(environment.backendUrl + '/allFlights', {headers: contentHeaders})
  }


  getChosenFlights(startingLocation: string, destination: string, dateOfFlight: string): Observable<[Flight]> {
    const params = new HttpParams().set('start', startingLocation)
      .set('end', destination)
      .set('time', dateOfFlight)
    return this.httpClient.get<[Flight]>(environment.backendUrl + '/findFlight', {params}/*, {headers: contentHeaders}*/)
  }

  getLocationFilteredByName(input: string, url: string): Observable<[string]> {
    const params = new HttpParams().set('input', input)
    return this.httpClient.get<[string]>(environment.backendUrl + "/getAll"+url, {params});
  }
}
