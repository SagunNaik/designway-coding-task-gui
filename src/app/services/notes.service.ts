import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Router } from '@angular/router';
import { API_URL } from '../constant';
import { HttpHeaders } from '@angular/common/http';
import { LocalStorageTokenService } from './local-storage-token.service';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  constructor(private apiService: ApiService,
    private router: Router,
    private localService: LocalStorageTokenService
  ) { }


  public createNote(payload: any) {
    let headerOption = new HttpHeaders()
      .set("Authorization", `Bearer ${this.localService.getToken()}`)
      .set("Content-Type", "application/json");


    return this.apiService.post(API_URL.NOTE.NOTE, payload, { 'headers': headerOption })
  }

  public updateNote(id: string, payload: any): any {
    let headerOption = new HttpHeaders()
      .set("Authorization", `Bearer ${this.localService.getToken()}`)
      .set("Content-Type", "application/json");


    return this.apiService.patch(`${API_URL.NOTE.NOTE}${id}`, payload, { 'headers': headerOption });
  }

  public deleteNote(id: string): any {
    let headerOption = new HttpHeaders()
      .set("Authorization", `Bearer ${this.localService.getToken()}`)
      .set("Content-Type", "application/json");


    return this.apiService.delete(`${API_URL.NOTE.NOTE}${id}`, { 'headers': headerOption });
  }

  public getNote(id: string): any {
    let headerOption = new HttpHeaders()
      .set("Authorization", `Bearer ${this.localService.getToken()}`)
      .set("Content-Type", "application/json");

    return this.apiService.get(`${API_URL.NOTE.NOTE}${id}`, { 'headers': headerOption });
  }

  public getSharedNote(id: string): any {
    let headerOption = new HttpHeaders()
      .set("Authorization", `Bearer ${this.localService.getToken()}`)
      .set("Content-Type", "application/json");


    return this.apiService.get(`${API_URL.NOTE.SHARED}${id}`, { 'headers': headerOption });
  }

  public getAllNotes(): any {

    let headerOption = new HttpHeaders()
      .set("Authorization", `Bearer ${this.localService.getToken()}`)
      .set("Content-Type", "application/json");

    return this.apiService.get(API_URL.NOTE.NOTE, { 'headers': headerOption });
  }
}
