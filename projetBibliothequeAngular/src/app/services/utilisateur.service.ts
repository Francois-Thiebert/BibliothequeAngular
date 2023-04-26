import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { utilisateurRest } from '../env';
import { ObjectToJsonService } from './object-to-json.service';
import { Utilisateur } from '../model/utilisateur';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {

  constructor(private http: HttpClient, private convert: ObjectToJsonService) {}


  public allUtilisateur(): Observable<Utilisateur[]> {
    return this.http.get<Utilisateur[]>(utilisateurRest);



    
  }

  public getById(id: number): Observable<Utilisateur> {
    return this.http.get<Utilisateur>(`${Utilisateur}/${id}`);
  }
    
  public delete(id: number): Observable<void> {
    return this.http.delete<void>(`${Utilisateur}/${id}`);
  }
    
  public update(utilisateur: Utilisateur): Observable<Utilisateur> {
    return this.http.put<Utilisateur>(`${Utilisateur}/${utilisateur.id}`,
    this.convert.utilisateurToJson(utilisateur)
    );
  }
    
  public create (utilisateur: Utilisateur): Observable<Utilisateur> {
    return this.http.post<Utilisateur>(
      utilisateurRest,
      this.convert.utilisateurToJson(utilisateur)
    );
  }

  public inscription(utilisateur: any): Observable<any> {
    return this.http.post(utilisateurRest + '/inscription', utilisateur);
  }

  public checkLogin(login: string): Observable<boolean> {
    return this.http.get<boolean>(
      'http://localhost:8080/bibliotheque/api/compte/login/check/' + login
    );
  }

}