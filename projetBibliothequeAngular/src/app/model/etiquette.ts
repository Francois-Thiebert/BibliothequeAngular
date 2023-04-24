import { Livre } from "./livre";

export class Etiquette {
  private _id?: number | undefined;
  public get id(): number | undefined {
    return this._id;
  }
  public set id(value: number | undefined) {
    this._id = value;
  }
  private _etiquetteParent?: Etiquette | undefined;
  public get etiquetteParent(): Etiquette | undefined {
    return this._etiquetteParent;
  }
  public set etiquetteParent(value: Etiquette | undefined) {
    this._etiquetteParent = value;
  }
  private _etiquettesEnfants?: Etiquette[] | undefined;
  public get etiquettesEnfants(): Etiquette[] | undefined {
    return this._etiquettesEnfants;
  }
  public set etiquettesEnfants(value: Etiquette[] | undefined) {
    this._etiquettesEnfants = value;
  }
  private _livres?: Livre[] | undefined;
  public get livres(): Livre[] | undefined {
    return this._livres;
  }
  public set livres(value: Livre[] | undefined) {
    this._livres = value;
  }
}
