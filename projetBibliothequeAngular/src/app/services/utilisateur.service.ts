import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { utilisateurRest } from '../env';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {

  constructor(private http: HttpClient) {}

  public inscription(utilisateur: any): Observable<any> {
    return this.http.post(utilisateurRest + '/inscription', utilisateur);
  }

  public checkLogin(login: string): Observable<boolean> {
    return this.http.get<boolean>(
      'http://localhost:8080/bibliotheque/api/compte/login/check/' + login
    );
  }

}
