import { Emprunt } from "./emprunt";
import { Etiquette } from "./etiquette";
import { Statut } from "./statut";

export class Livre {
  private _id?: number | undefined;
  public get id(): number | undefined {
    return this._id;
  }
  public set id(value: number | undefined) {
    this._id = value;
  }

  private _titre?: string | undefined;
  public get titre(): string | undefined {
    return this._titre;
  }
  public set titre(value: string | undefined) {
    this._titre = value;
  }

  private _auteur?: string | undefined;
  public get auteur(): string | undefined {
    return this._auteur;
  }
  public set auteur(value: string | undefined) {
    this._auteur = value;
  }

  private _statut?: Statut | undefined;
  public get statut(): Statut | undefined {
    return this._statut;
  }
  public set statut(value: Statut | undefined) {
    this._statut = value;
  }

  private _etiquettes?: Etiquette[] | undefined;
  public get etiquettes(): Etiquette[] | undefined {
    return this._etiquettes;
  }
  public set etiquettes(value: Etiquette[] | undefined) {
    this._etiquettes = value;
  }

  private _emprunts?: Emprunt[] | undefined;
  public get emprunts(): Emprunt[] | undefined {
    return this._emprunts;
  }
  public set emprunts(value: Emprunt[] | undefined) {
    this._emprunts = value;
  }
}
