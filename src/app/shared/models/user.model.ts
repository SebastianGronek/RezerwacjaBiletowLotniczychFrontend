export class User {
  userId: number;
  userFirstName: string;
  userLastName: string;
  login: string;


  constructor(id: number, userFirstName: string, userName: string, login: string) {
    this.userId = id;
    this.userFirstName = userFirstName;
    this.userLastName = userName;
    this.login = login;
  }
}
