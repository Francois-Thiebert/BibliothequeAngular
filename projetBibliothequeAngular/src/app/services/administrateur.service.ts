import { Injectable } from '@angular/core';
import { Administrateur } from '../model/administrateur';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ObjectToJsonService } from './object-to-json.service';
import { administrateurRest } from '../env';

@Injectable({
  providedIn: 'root'
})
export class AdministrateurService {

  constructor(private http: HttpClient, private convert: ObjectToJsonService) {}

  public allAdministrateur(): Observable<Administrateur[]> {
    return this.http.get<Administrateur[]>(administrateurRest);

  }

  public getById(id: number): Observable<Administrateur> {
    return this.http.get<Administrateur>(`${administrateurRest}/${id}`);
  }

  public delete(id: number): Observable<void> {
    return this.http.delete<void>(`${administrateurRest}/${id}`);
  }

  public update(administrateur: Administrateur): Observable<Administrateur> {
    return this.http.put<Administrateur>(`${administrateurRest}/${administrateur.id}`,
    this.convert.administrateurToJson(administrateur)
    );
  }

  public create (administrateur: Administrateur): Observable<Administrateur> {
    return this.http.post<Administrateur>(
      administrateurRest,
      this.convert.administrateurToJson(administrateur)
    );
  }
}
