import {Flight} from "./flight.model";

export class User {
  userId: number;
  userFirstName: string;
  userName: string;
  ticketList?: [Flight];


  constructor(id: number, userFirstName: string, userName: string) {
    this.userId = id;
    this.userFirstName = userFirstName;
    this.userName = userName;
  }
}
