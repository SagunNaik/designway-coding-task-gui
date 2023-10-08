import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageTokenService } from 'src/app/services/local-storage-token.service';
import { ToastrService } from "ngx-toastr";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(
    private localservice: LocalStorageTokenService,
    private toast: ToastrService,
    private router: Router,

  ) {

  }

  onLogout() {
    if (this.localservice.clearLocalStorage()) {
      this.toast.success("Logout Successfull");
      this.router.navigateByUrl("login", { replaceUrl: true })
    }
  }
}
