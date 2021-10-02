import { Component, OnInit } from '@angular/core';
import {User} from "../shared/models/user.model";
import {UserService} from "../user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {


  model = new User(0, "", "", "")

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
  }

  submit(){
    this.userService.create(this.model).subscribe(()=>{
      this.router.navigate(['/user/allUsers'])
    })
  }


}
