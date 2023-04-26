import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Emprunt } from '../model/emprunt';
import { ObjectToJsonService } from './object-to-json.service';
import { empruntRest, empruntUserRest } from '../env';
import { Livre } from '../model/livre';

@Injectable({
  providedIn: 'root'
})
export class EmpruntService {

  constructor(private http: HttpClient, private convert: ObjectToJsonService) {}

  public allEmprunt(): Observable<Emprunt[]> {
    return this.http.get<Emprunt[]>(empruntRest);
  }

  public EmpruntByUser(id: number): Observable<Emprunt[]> {
    return this.http.get<Emprunt[]>(`${empruntUserRest}/${id}`);
  }

  public getById(id: number): Observable<Emprunt> {
    return this.http.get<Emprunt>(`${empruntRest}/${id}`);
  }

  public delete(id: number): Observable<void> {
    return this.http.delete<void>(`${empruntRest}/${id}`);
  }

  public update(emprunt: Emprunt): Observable<Emprunt> {
    // console.debug(emprunt)
    return this.http.put<Emprunt>(`${empruntRest}/${emprunt.id}`,
    this.convert.empruntToJson(emprunt)
    );
  }

  public create (livre: Livre): Observable<Emprunt> {
    return this.http.post<Emprunt>(
      empruntRest,
      this.convert.livreToJson(livre)
    );
  }
}
