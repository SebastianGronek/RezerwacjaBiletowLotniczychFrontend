import {Flight} from "./flight.model";

export class User {
  id: number;
  userFirstName: string;
  userName: string;
  ticketList?: [Flight];


  constructor(id: number, userFirstName: string, userName: string) {
    this.id = id;
    this.userFirstName = userFirstName;
    this.userName = userName;
  }
}
