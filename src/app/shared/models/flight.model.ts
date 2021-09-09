import {User} from "./user.model";

export class Flight {
  id: number;
  startingLocation: string;
  destination: string;
  durationOfFlight: string;
  dateOfFlight: string
  passengers?: [User];


  constructor(id: number, startingLocation: string, destination: string, durationOfFlight: string, dateOfFlight: string) {
    this.id = id;
    this.startingLocation = startingLocation;
    this.destination = destination;
    this.durationOfFlight = durationOfFlight;
    this.dateOfFlight = dateOfFlight;
  }
}
