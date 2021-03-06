import { Component, OnInit } from '@angular/core';
import {User} from "../shared/models/user.model";
import {UserService} from "../services/user.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user?:User;
  sub:any;
  constructor(private userService:UserService, private router:ActivatedRoute) { }

  ngOnInit(): void {
    this.sub = this.router.params.subscribe(params => {
      let id = +params['id']; // (+) converts string 'id' to a number

      this.userService.getById(id).subscribe((user: User) => {
        this.user = user;
      });
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }


}
