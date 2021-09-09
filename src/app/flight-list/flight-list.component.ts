import {Component, OnInit} from '@angular/core';
import {Flight} from "../shared/models/flight.model";
import {FlightService} from "../flight.service";

@Component({
  selector: 'app-flight-list',
  templateUrl: './flight-list.component.html',
  styleUrls: ['./flight-list.component.css']
})
export class FlightListComponent implements OnInit {

  flights?: [Flight]

  constructor(private flightService:FlightService) {}

  ngOnInit(): void {
    this.flightService.getAllFlights()
      .subscribe((flights: [Flight]) => {
        this.flights = flights;
      })
  }

}
