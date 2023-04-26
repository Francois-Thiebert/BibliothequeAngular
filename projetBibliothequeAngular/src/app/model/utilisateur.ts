import { Role } from "./role";

export class Utilisateur {

  public get id(): number | undefined {
    return this._id;
  }
  public set id(value: number | undefined) {
    this._id = value;
  }

  public get prenom(): string | undefined {
    return this._prenom;
  }
  public set prenom(value: string | undefined) {
    this._prenom = value;
  }


  public get nom(): string | undefined {
    return this._nom;
  }
  public set nom(value: string | undefined) {
    this._nom = value;
  }
  public set login(value: string | undefined) {
    this._login = value;
  }
  
  public get password(): string | undefined {
    return this._password;
  }
  public set password(value: string | undefined) {
    this._password = value;
  }
  public get role(): Role | undefined {
    return this._role;
  }
  public set role(value: Role | undefined) {
    this._role = value;
  }
  public get login(): string | undefined {
    return this._login;
  }
  

  constructor(
    private _id?: number,
    private _login?: string,
    private _password?: string,
    private _role?: Role,
    private _nom?: string,
    private _prenom?: string
  ) {}


}
