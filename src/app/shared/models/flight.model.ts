export class Flight {
  id: number;
  startingLocation: string;
  destination: string;
  durationOfFlight: string;
  dateOfDeparture: string;
  dateOfArrival: string;


  constructor(id: number, startingLocation: string, destination: string, durationOfFlight: string, dateOfDeparture: string, dateOfArrival: string) {
    this.id = id;
    this.startingLocation = startingLocation;
    this.destination = destination;
    this.durationOfFlight = durationOfFlight;
    this.dateOfDeparture = dateOfDeparture;
    this.dateOfArrival = dateOfArrival;
  }
}
