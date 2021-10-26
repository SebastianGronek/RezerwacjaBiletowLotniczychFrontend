import {Component, OnInit} from '@angular/core';
import {Authentication} from '../services/authentication.service';
import {TokenStorageService} from '../services/token-storage.service';
import {FormControl} from "@angular/forms";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login?: string
  password: null

  form: any = {
    login: null,
    password: null
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];

  constructor(private authService: Authentication, private tokenStorage: TokenStorageService) {
  }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
    }
  }

  onSubmit(): void {
    const {login, password} = this.form;

    this.authService.login(login, password).subscribe(
      data => {
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUser(data);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getUser().roles;
        this.reloadPage();
      }/*,
      err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }*/
    );
  }

  reloadPage(): void {
    window.location.reload();
  }
}
