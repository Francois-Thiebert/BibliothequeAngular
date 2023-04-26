import { Emprunt } from 'src/app/model/emprunt';
import { Role } from './role';
import { Utilisateur } from './utilisateur';

export class Adherent extends Utilisateur{

  // private _id?: number | undefined;
  // public get id(): number | undefined {
  //   return this._id;
  // }
  // public set id(value: number | undefined) {
  //   this._id = value;
  // }
  // private _login?: string | undefined;
  // public get login(): string | undefined {
  //   return this._login;
  // }
  // public set login(value: string | undefined) {
  //   this._login = value;
  // }
  // private _password?: string | undefined;
  // public get password(): string | undefined {
  //   return this._password;
  // }
  // public set password(value: string | undefined) {
  //   this._password = value;
  // }
  // private _role?: Role | undefined;
  // public get role(): Role | undefined {
  //   return this._role;
  // }
  // public set role(value: Role | undefined) {
  //   this._role = value;
  // }

  // private _prenom?: string | undefined;
  // public get prenom(): string | undefined {
  //   return this._prenom;
  // }
  // public set prenom(value: string | undefined) {
  //   this._prenom = value;
  // }

  // private _nom?: string | undefined;
  // public get nom(): string | undefined {
  //   return this._nom;
  // }
  // public set nom(value: string | undefined) {
  //   this._nom = value;
  // }

  

  private _emprunts?: Emprunt[] | undefined;
  public get emprunts(): Emprunt[] | undefined {
    return this._emprunts;
  }
  public set emprunts(value: Emprunt[] | undefined) {
    this._emprunts = value;
  }

 
}
