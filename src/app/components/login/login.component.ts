import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {



  constructor(private userService: UserService) { }

  onSubmit(data: any) {

    const payload = {
      username: data.username,
      password: data.password
    }
    this.userService.login(payload)
  }

  ngOnInit(): void {

  }

}
