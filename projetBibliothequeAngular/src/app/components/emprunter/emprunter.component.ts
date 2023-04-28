import { Etiquette } from './../../model/etiquette';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Adherent } from 'src/app/model/adherent';
import { Emprunt } from 'src/app/model/emprunt';
import { EtiquetteNom } from 'src/app/model/etiquette-nom';
import { Livre } from 'src/app/model/livre';
import { Statut } from 'src/app/model/statut';
import { EmpruntService } from 'src/app/services/emprunt.service';
import { EtiquetteService } from 'src/app/services/etiquette.service';
import { LivreService } from 'src/app/services/livre.service';

@Component({
  selector: 'app-emprunter',
  templateUrl: './emprunter.component.html',
  styleUrls: ['./emprunter.component.css']
})

//liste de livre pour adhérents
export class EmprunterComponent {

  form!: FormGroup
  motifTitre: string = "";
  motifAuteur: string = "";

  livre!: Livre;
  emprunt!: Emprunt;
  livres:Livre[]=[];
  emprunteur!: Adherent;
  etiquettesSelect: EtiquetteNom[] = [];
  etiquettesEnBase: EtiquetteNom[] = [];

  rechercheObj:any;



  constructor(private livreSrv: LivreService, private empruntSrv: EmpruntService, private etiquetteSrv: EtiquetteService) {}
  ngOnInit(): void {
    this.initLivres();
    this.initEtiquettes();
    this.emprunt=new Emprunt();
    this.emprunteur=new Adherent();
    if(sessionStorage.getItem('utilisateur')){
      this.emprunteur=JSON.parse(sessionStorage.getItem('utilisateur')!) as Adherent;
    }
    this.form = new FormGroup({
      titre: new FormControl(),
      auteur: new FormControl(),
      statut: new FormControl(),
    })

  }

  initEtiquettes() {
    this.etiquetteSrv.allEtiquettes().subscribe((etiquettes: EtiquetteNom[]) => {
      this.etiquettesEnBase = etiquettes;
      this.etiquettesEnBase.shift();
    });
  }

  initLivres() {
    this.livreSrv.allLivre().subscribe((livres: Livre[]) => {
      this.livres = livres;
    });
  }

  recherche(){
    let rechercheJson={
      motifTitre: this.form.get("titre")?.value ? this.form.get("titre")?.value : "",
      motifAuteur: this.form.get("auteur")?.value ? this.form.get("auteur")?.value : "",
      statut: this.form.get('statut')?.value,
      etiquettes: this.etiquettesSelect.map(et => { return et.nom})
     }
    this.rechercheObj=rechercheJson;
    this.livreSrv.recherche(rechercheJson).subscribe((livres) => {
      this.livres = livres

    })
    console.debug(this.rechercheObj)
    return this.livres;
  }

  emprunter (livre: Livre) {
    livre.statut = Statut.STATUT_EMPRUNTE
    this.empruntSrv.create(livre).subscribe(() => {
      this.initLivres();
    })
  }

  ajout(etiquette: EtiquetteNom){
    if(this.etiquettesSelect.includes(etiquette)){
      this.etiquettesSelect=this.etiquettesSelect.filter(e => e !== etiquette);
    }
    else {
      this.etiquettesSelect.push(etiquette);
    }
  }
}



