import {Component, OnInit} from '@angular/core';
import {Flight} from "../shared/models/flight.model";
import {FlightService} from "../flight.service";
import {Router} from "@angular/router";

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

  constructor(private flightService: FlightService, private router: Router) {
  }

  ngOnInit(): void {
  }

  submit() {
    if (this.startingLocation !== undefined && this.destination !== undefined && this.dateOfFlight !== undefined) {
      var formattedDate = new Date(this.dateOfFlight).toISOString();
      this.flightService.getChosenFlights(this.startingLocation, this.destination, formattedDate).subscribe((flights: [Flight]) => {
          this.flights = flights;
        }
      )
    } else if (this.startingLocation !== undefined && this.destination !== undefined) {
      this.flightService.getChosenFlights(this.startingLocation, this.destination, "").subscribe((flights: [Flight]) => {
        this.flights = flights;
      })
    }
  }
}
