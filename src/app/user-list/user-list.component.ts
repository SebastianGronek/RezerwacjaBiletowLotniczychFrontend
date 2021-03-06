import {Component, OnInit} from '@angular/core';
import {User} from "../shared/models/user.model";
import {UserService} from "../services/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users?: [User]

  constructor(private userService: UserService, private router: Router) {
  }

  ngOnInit(): void {
    this.userService.getAllUsers()
      .subscribe((users: [User]) => {
        this.users = users;
      })
  }

  delete(user: User) {
    this.userService.deleteUser(user).subscribe((deletedUser: User) => {
      this.userService.getAllUsers()
        .subscribe((users: [User]) => {
          this.users = users;
        })
    })
  }

  update(id: number) {
    this.router.navigate(['/user/update/'+id])
  }
}
