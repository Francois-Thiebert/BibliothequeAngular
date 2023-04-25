import { Adherent } from "./adherent";
import { Livre } from "./livre";

export class Emprunt {
  private _id?: number | undefined;
  public get id(): number | undefined {
    return this._id;
  }
  public set id(value: number | undefined) {
    this._id = value;
  }

  private _dateDebut?: Date | undefined;
  public get dateDebut(): Date | undefined {
    return this._dateDebut;
  }
  public set dateDebut(value: Date | undefined) {
    this._dateDebut = value;
  }

  private _dateFin?: Date | undefined;
  public get dateFin(): Date | undefined {
    return this._dateFin;
  }
  public set dateFin(value: Date | undefined) {
    this._dateFin = value;
  }

  private _rendu?: boolean | undefined;
  public get rendu(): boolean | undefined {
    return this._rendu;
  }
  public set rendu(value: boolean | undefined) {
    this._rendu = value;
  }

  private _emprunteur?: Adherent | undefined;
  public get emprunteur(): Adherent | undefined {
    return this._emprunteur;
  }
  public set emprunteur(value: Adherent | undefined) {
    this._emprunteur = value;
  }

  private _livre?: Livre | undefined;
  public get livre(): Livre | undefined {
    return this._livre;
  }
  public set livre(value: Livre | undefined) {
    this._livre = value;
  }
}
