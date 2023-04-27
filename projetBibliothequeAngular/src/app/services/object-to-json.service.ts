import { Injectable } from '@angular/core';
import { Livre } from '../model/livre';
import { Adherent } from '../model/adherent';
import { Emprunt } from '../model/emprunt';
import { Statut } from '../model/statut';
import { Administrateur } from '../model/administrateur';
import { Role } from '../model/role';
import { Utilisateur } from '../model/utilisateur';

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
      prenom: adherent.prenom,
      nom: adherent.nom,
      login: adherent.login,
      password: adherent.password,
      role:Role.ROLE_ADHERENT
    }
    return obj;
  }

  public utilisateurToJson(utilisateur: Utilisateur): any {
    let obj = {
      id: utilisateur.id,
      prenom: utilisateur.prenom,
      nom: utilisateur.nom,
      login: utilisateur.login,
      password: utilisateur.password,
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
    return obj;
  }


  public administrateurToJson(administrateur: Administrateur): any {
    let obj = {
      id: administrateur.id,
      prenom: administrateur.prenom,
      nom: administrateur.nom,
      login: administrateur.login,
      password: administrateur.password
    }
    return obj;
  }
}
