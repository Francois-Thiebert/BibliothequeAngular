import { Injectable } from '@angular/core';
import { ObjectToJsonService } from './object-to-json.service';
import { HttpClient } from '@angular/common/http';
import { Etiquette } from '../model/etiquette';
import { Observable } from 'rxjs';
import { EtiquetteNom } from '../model/etiquette-nom';
import { etiquetteRest } from '../env';

@Injectable({
  providedIn: 'root'
})
export class EtiquetteService {

  constructor(private http: HttpClient, private convert: ObjectToJsonService) { }

  public allEtiquettes(): Observable<EtiquetteNom[]> {
    return this.http.get<EtiquetteNom[]>(etiquetteRest);
  }
}
