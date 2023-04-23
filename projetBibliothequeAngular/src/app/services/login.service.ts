import { Injectable } from '@angular/core';
import { Adherent } from '../model/comptes/adherent';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { authRest } from '../env';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private http: HttpClient) {}

  public login(login: string, password: string): Observable<Adherent> {
    let headers: HttpHeaders = new HttpHeaders({
      Authorization: 'Basic ' + window.btoa(login + ':' + password),
    });
    return this.http.get<Adherent>(authRest, { headers: headers });
  }
}
