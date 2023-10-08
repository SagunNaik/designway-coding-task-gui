import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {


  constructor(private toastr: ToastrService,
    private userService: UserService,

  ) {

  }


  onSignUp(data: any) {

    if (data.confirmPassword !== data.password) {
      this.toastr.error('Both Passwords does not match!!');
    }
    else {
      const payload = {

        firstName: data.firstName,
        lastName: data.lastName,
        username: data.username,
        email: data.email,
        age: 1,
        gender: data.gender,
        role: 'user',
        password: data.password

      }


      this.userService.signup(payload);
    }

  }

}
