import {Component, OnInit} from '@angular/core';
import {Flight} from "../shared/models/flight.model";
import {FlightService} from "../flight.service";

@Component({
  selector: 'app-flight-find',
  templateUrl: './flight-find.component.html',
  styleUrls: ['./flight-find.component.css']
})
export class FlightFindComponent implements OnInit {
  flights?: [Flight]
  startingLocation?: Text
  destination?: Text
  dateOfFlight?: Text

  constructor(private flightService: FlightService) {
  }

  ngOnInit(): void {
  }

  submit(){
    if(this.startingLocation!==undefined&& this.destination!==undefined && this.dateOfFlight!==undefined){
    this.flightService.getChosenFlights(this.startingLocation, this.destination, this.dateOfFlight).subscribe((flights: [Flight]) => {
      this.flights = flights;
    })
  }}
}
