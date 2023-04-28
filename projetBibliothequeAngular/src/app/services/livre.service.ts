import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Livre } from '../model/livre';
import { livreRest } from '../env';
import { ObjectToJsonService } from './object-to-json.service';
import { Emprunt } from '../model/emprunt';
import { Recherche } from '../model/recherche';

@Injectable({
  providedIn: 'root'
})
export class LivreService {

  constructor(private http: HttpClient, private convert: ObjectToJsonService) {}

  public allLivre(): Observable<Livre[]> {
    return this.http.get<Livre[]>(livreRest);

  }

  public recherche(recherche: any): Observable<Livre[]>{
    return this.http.post<Livre[]>(`${livreRest}/recherche`, recherche);
  }

  public getById(id: number): Observable<Livre> {
    return this.http.get<Livre>(`${livreRest}/${id}`);
  }

  public getEmpruntActif(id: number): Observable<Emprunt> {
    return this.http.get<Emprunt>(`${livreRest}/${id}/emprunt_actif`);
  }

  public delete(id: number): Observable<void> {
    return this.http.delete<void>(`${livreRest}/${id}`);
  }

  public update(livre: Livre): Observable<Livre> {
    return this.http.put<Livre>(`${livreRest}/${livre.id}`,
    this.convert.livreToJson(livre)
    );
  }

  public updateWithEtiquettes(livre: Livre): Observable<Livre> {
    return this.http.put<Livre>(`${livreRest}/etiquettes/${livre.id}`,
    this.convert.livreToJson(livre)
    );
  }


  public create (livre: Livre): Observable<Livre> {
    return this.http.post<Livre>(
      livreRest,
      this.convert.livreToJson(livre)
    );
  }



}
