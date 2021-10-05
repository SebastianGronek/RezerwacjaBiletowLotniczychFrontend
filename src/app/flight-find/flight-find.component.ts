import {Component, OnInit} from '@angular/core';
import {Flight} from "../shared/models/flight.model";
import {FlightService} from "../services/flight.service";
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
  flights?: [Flight];
  startingLocation?: string;
  dateOfFlight?: string;
  destination?: string;
  startingLocationForm = new FormControl();
  destinationForm = new FormControl();
  filteredStartingLocations?: Observable<string[]>;
  filteredDestinations?: Observable<string[]>;

  constructor(private flightService: FlightService, private router: Router) {
  }

  ngOnInit(): void {
    this.filteredStartingLocations = this.startingLocationForm.valueChanges.pipe(
      startWith(''),
      switchMap(inputStartingLocation => this.filter(inputStartingLocation, "StartingLocations"))
    );
    this.filteredDestinations = this.destinationForm.valueChanges.pipe(
      startWith(''),
      switchMap(inputDestination => this.filter(inputDestination, "Destinations"))
    );
  }

  filter(input: string, location: string): Observable<[string]> {
    return this.flightService.getLocationFilteredByName(input, location);
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
      }, error => {
        if (error.error instanceof HttpErrorResponse) {
          console.error(error.message);
        }
      })
    }
  }
}
