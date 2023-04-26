import { Injectable } from '@angular/core';
import { Livre } from '../model/livre';
import { Adherent } from '../model/adherent';
import { Emprunt } from '../model/emprunt';
import { Statut } from '../model/statut';

@Injectable({
  providedIn: 'root'
})
export class ObjectToJsonService {

  constructor() { }

  public livreToJson(livre: Livre): any {
    let obj = {
      id: livre.id,
      titre: livre.titre,
      auteur: livre.auteur,
      statut: livre.statut,
    };
    if (livre.etiquettes) {
      Object.assign(obj, {etiquettes: livre.etiquettes});
    }
    if (livre.emprunts) {
      Object.assign(obj, {emprunts: livre.emprunts});
    }
    return obj;
  }

  public adherentToJson(adherent: Adherent): any {
    let obj = {
      id: adherent.id,
      prenom: adherent.prenom,
      nom: adherent.nom,
      login: adherent.login,
      password: adherent.password,
      emprunts:adherent.emprunts
    }
    return obj;
  }

  public empruntToJson(emprunt: Emprunt): any {
    let obj = {
      id: emprunt.id,
      emprunteur: emprunt.emprunteur,
      livre: emprunt.livre,
      dateDebut: emprunt.dateDebut,
      dateFin: emprunt.dateFin,
      rendu: emprunt.rendu
    }
    console.debug(obj);
    return obj;
  }


}
