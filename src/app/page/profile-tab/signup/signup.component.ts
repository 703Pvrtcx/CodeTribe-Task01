import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from "./../../../services/authentication.service";
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {

  constructor(
    public authService: AuthenticationService,
  ) { }

  ngOnInit() {}
  signUp(email, password){
    this.authService.RegisterUser(email.value, password.value)
    .then((res) => {
      // Do something here
      //this.authService.SendVerificationMail()
    }).catch((error) => {
      window.alert(error.message);
    })
}
}
