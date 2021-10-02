import {Flight} from "./flight.model";

export class User {
  userId: number;
  userFirstName: string;
  userLastName: string;
  login: string;
  ticketList?: [Flight];


  constructor(id: number, userFirstName: string, userName: string, login: string) {
    this.userId = id;
    this.userFirstName = userFirstName;
    this.userLastName = userName;
    this.login = login;
  }
}
