import {Flight} from "./flight.model";
import {User} from "./user.model";

export class Ticket {
  ticketId: number;
  owner: User;
  flightsOnTicket: [Flight];


  constructor(ticketId: number, owner: User, flightsOnTicket: [Flight]) {
    this.ticketId = ticketId;
    this.flightsOnTicket = flightsOnTicket;
    this.owner = owner;
  }
}
