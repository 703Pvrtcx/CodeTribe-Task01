import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import {  } from 'firebase/app';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  login = {} as Login;
  constructor(private authDao: AuthenticationService,
    private router: Router) { }
  ngOnInit() {}
  logIn(email, password) {
    this.authDao.SignIn(email.value, password.value)
      .then((res) => {
        this.router.navigate(['profile-tab']); 
      }).catch((error) => {
        window.alert(error.message);
      })
  }
  }
 


