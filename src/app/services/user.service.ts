import { ErrorHandler, Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { API_URL } from '../constant';
import { Router } from '@angular/router';
import { LocalStorageTokenService } from './local-storage-token.service';
import { ToastrService } from 'ngx-toastr';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private apiService: ApiService,
    private toastr: ToastrService,
    private router: Router,
    private localService: LocalStorageTokenService
  ) { }


  public login(payload: any) {
    this.apiService.post(API_URL.USER.LOGIN, payload).subscribe((data: any) => {

      if (data.cm_token) {
        if (this.localService.setItem("cm_token", data.cm_token)) {

          this.router.navigateByUrl('dashboard')
        }

      }
      else {
        this.toastr.error("Failed to Login, please check your credential.");
      }

    },
      (err: any) => {
        this.toastr.error(err.error.message);
      })
  }

  public signup(payload: any): any {
    this.apiService.post(API_URL.USER.SIGNUP, payload).subscribe(
      (data: any) => {

        if (data.id) {
          this.toastr.success("User Created..");

          this.router.navigateByUrl("login", { replaceUrl: true })

        }
      },
      (err: any) => {
        this.toastr.error(err.error.message);
      }
    )
  }
}
