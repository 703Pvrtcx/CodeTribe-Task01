import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AuthenticationService } from "./../../../services/authentication.service";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {

  constructor(
    public authService: AuthenticationService,
    public router: Router
  ) { }

  ngOnInit(){}
  goSignIn(){
    this.router.navigateByUrl('login');
  }
  signUp(email, password){
    this.authService.RegisterUser(email.value, password.value)
    .then((res) => {
      // Do something here
      //this.authService.SendVerificationMail()
      this.router.navigate(['login']);
    }).catch((error) => {
      window.alert(error.message)
    })
}

}