import { Statut } from "./statut";

export class Recherche {
    public get motifTitre(): string | undefined {
        return this._motifTitre;
    }
    public set motifTitre(value: string | undefined) {
        this._motifTitre = value;
    }
    public get motifAuteur(): string  | undefined{
        return this._motifAuteur;
    }
    public set motifAuteur(value: string | undefined) {
        this._motifAuteur = value;
    }
    public get statut(): Statut  | undefined{
        return this._statut;
    }
    public set statut(value: Statut | undefined) {
        this._statut = value;
    }
    public get etiquette(): string[] | undefined {
        return this._etiquette;
    }
    public set etiquette(value: string[] | undefined) {
        this._etiquette = value;
    }

    constructor(private _motifTitre?: string,
        private _motifAuteur?: string,
        private _statut?: Statut,
        private _etiquette?: string[]) {}

        

}
