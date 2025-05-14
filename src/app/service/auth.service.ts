import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, Observable, throwError } from 'rxjs';
import { User } from '../model/user';
import { environment } from '../../environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  headers = new HttpHeaders().set('Content-Type', 'application/json');
  currentUse = {};
  private apiUrl = environment.apiUrl

  constructor(private http: HttpClient,  public router: Router) {
   
  }

  login(email: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/utilisateur/login`, { email, password });
  }
  



}
