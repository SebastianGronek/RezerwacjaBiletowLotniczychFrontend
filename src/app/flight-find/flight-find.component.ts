import {Component, OnInit} from '@angular/core';
import {Flight} from "../shared/models/flight.model";
import {FlightService} from "../flight.service";
import {Router} from "@angular/router";
import {HttpErrorResponse} from "@angular/common/http";
import {FormControl} from "@angular/forms";
import {startWith, switchMap} from "rxjs/operators";
import {Observable} from "rxjs";

@Component({
  selector: 'app-flight-find',
  templateUrl: './flight-find.component.html',
  styleUrls: ['./flight-find.component.css']
})
export class FlightFindComponent implements OnInit {
  flights?: [Flight]
  startingLocation?: string
  destination?: string
  dateOfFlight?: string
  flightForm = new FormControl();
  filteredStartingLocations?: Observable<string[]>;

  constructor(private flightService: FlightService, private router: Router) {
  }

  ngOnInit(): void {
    this.filteredStartingLocations = this.flightForm.valueChanges.pipe(
      startWith('L'),
      switchMap(input => this.filter(input, "StartingLocations"))
    );
  }

  filter(input: string, location: string): Observable<[string]> {
  return this.flightService.getLocationFilteredByName(input, location);
     /* .subscribe((filteredStartingLocations:[string])=>{
        this.filteredStartingLocations = filteredStartingLocations;
    }
  )*/
  }

  submit() {
    if (this.startingLocation !== undefined && this.destination !== undefined && this.dateOfFlight !== undefined) {
      var formattedDate = new Date(this.dateOfFlight).toISOString();
      this.flightService.getChosenFlights(this.startingLocation, this.destination, formattedDate).subscribe((flights: [Flight]) => {
          this.flights = flights;
        }, error => {
          if (error.error instanceof HttpErrorResponse) {
            console.error(error.message);
          }
        }
      );
    } else if (this.startingLocation !== undefined && this.destination !== undefined) {
      this.flightService.getChosenFlights(this.startingLocation, this.destination, "").subscribe((flights: [Flight]) => {
        this.flights = flights;
      })
    }
  }
}
