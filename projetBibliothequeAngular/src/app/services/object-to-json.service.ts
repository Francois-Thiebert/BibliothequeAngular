import { Injectable } from '@angular/core';
import { Livre } from '../model/livre';

@Injectable({
  providedIn: 'root'
})
export class ObjectToJsonService {

  constructor() { }

  public livreToJson(livre: Livre): any {
    let obj = {
      titre: livre.titre,
      auteur: livre.auteur,
      statut: livre.statut,
    };
    if (livre.id) {
      Object.assign(obj, {livreId: livre.id});
    }
    if (livre.etiquettes) {
      Object.assign(obj, {etiquettes: livre.etiquettes});
    }
    if (livre.emprunts) {
      Object.assign(obj, {emprunts: livre.emprunts});
    }
  }

}
