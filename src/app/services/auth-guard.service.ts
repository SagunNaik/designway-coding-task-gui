import { Injectable } from '@angular/core';
import { CanActivate, Router, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { LocalStorageTokenService } from './local-storage-token.service';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(
    private router: Router,
    private localService: LocalStorageTokenService
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const isLoggedIn = this.localService.getToken() ? true : false;

    console.warn(isLoggedIn)
    if (isLoggedIn) {
      return true;
    } else {
      this.router.navigateByUrl('login', { replaceUrl: true });
      return false;
    }
  }

}