import { Injectable } from '@angular/core';
import { Adherent } from '../model/adherent';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { adherentRest, livreRest } from '../env';
import { Livre } from '../model/livre';
import { ObjectToJsonService } from './object-to-json.service';

@Injectable({
  providedIn: 'root'
})
export class AdherentService {

  constructor(private http: HttpClient, private convert: ObjectToJsonService) {}

  public allAdherent(): Observable<Adherent[]> {
    return this.http.get<Adherent[]>(adherentRest);

  }

  public getById(id: number): Observable<Adherent> {
    return this.http.get<Adherent>(`${adherentRest}/${id}`);
  }

  public delete(id: number): Observable<void> {
    return this.http.delete<void>(`${adherentRest}/${id}`);
  }

  public update(adherent: Adherent): Observable<Adherent> {
    return this.http.put<Adherent>(`${adherentRest}/${adherent.id}`,
    this.convert.adherentToJson(adherent)
    );
  }

  public create (adherent: Adherent): Observable<Adherent> {
    return this.http.post<Adherent>(
      adherentRest,
      this.convert.adherentToJson(adherent)
    );
  }
}
