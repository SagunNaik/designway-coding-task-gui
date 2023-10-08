import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, retry, throwError } from 'rxjs';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl = environment.apiBaseUrl;

  constructor(private _http: HttpClient) {
  }


  public get(url: string, options?: any): any {
    return this._http.get(`${this.baseUrl}${url}`, options)
    //.subscribe((data) => data)
    //.pipe(retry(1), catchError(this.handleError));

  }
  public post(url: string, data: any, options?: any): any {
    return this._http.post(`${this.baseUrl}${url}`, data, options)
    //.subscribe((data) => data)
    //.pipe(retry(1), catchError(this.handleError));

  }
  public put(url: string, data: any, options?: any): any {
    return this._http.put(`${this.baseUrl}${url}`, data, options)
    // .subscribe((data) => data)
    //.pipe(retry(1), catchError(this.handleError));

  }
  public patch(url: string, data: any, options?: any): any {
    return this._http.patch(`${this.baseUrl}${url}`, data, options)
    //.subscribe((data) => data)
    //.pipe(retry(1), catchError(this.handleError));

  }
  public delete(url: string, options?: any): any {
    return this._http.delete(`${this.baseUrl}${url}`, options)
    // .subscribe((data) => data)
    //.pipe(retry(1), catchError(this.handleError));

  }

  // Error handling
  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(() => {
      return errorMessage;
    });
  }

}
