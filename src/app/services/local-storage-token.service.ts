import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageTokenService {

  constructor(private router: Router) { }

  public getToken(): string | null {
    const token = localStorage.getItem("cm_token");

    return token;
  }

  public setItem(key: string, value: string): boolean {
    localStorage.setItem(key, value)

    return localStorage.getItem(key) ? true : false;
  }

  public getItem(key: string): string | null {
    return localStorage.getItem(key)
  }

  public removeItem(key: string): boolean {
    localStorage.removeItem(key)

    return !localStorage.getItem(key) ? true : false;

  }

  public clearLocalStorage(): boolean {
    localStorage.clear();

    return localStorage.length === 0 ? true : false;

  }
}
