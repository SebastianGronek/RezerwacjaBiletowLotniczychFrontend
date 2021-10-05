import {Component, OnInit} from '@angular/core';
import {User} from "../shared/models/user.model";
import {UserService} from "../services/user.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  user?: User
  sub: any;

  constructor(private userService: UserService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      let id = +params['id']; // (+) converts string 'id' to a number

      this.userService.getById(id).subscribe((user: User) => {
        this.user = user;
      });
    });
  }

  update() {
    if (this.user !== undefined) {
      this.userService.updateUser(this.user.userId, this.user).subscribe(() => {
        this.router.navigate(['/user/allUsers'])
      })
    }
  }


}
