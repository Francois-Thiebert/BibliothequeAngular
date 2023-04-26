import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Adherent } from 'src/app/model/adherent';
import { Emprunt } from 'src/app/model/emprunt';
import { Livre } from 'src/app/model/livre';
import { EmpruntService } from 'src/app/services/emprunt.service';
import { LivreService } from 'src/app/services/livre.service';

@Component({
  selector: 'app-emprunter',
  templateUrl: './emprunter.component.html',
  styleUrls: ['./emprunter.component.css']
})

//liste de livre pour adhérents
export class EmprunterComponent {

  form!: FormGroup

  livre!: Livre;
  emprunt!: Emprunt;
  livres:Livre[]=[];
  emprunteur!: Adherent;
  etiquettes: string[] = [];

  constructor(private livreSrv: LivreService, private empruntSrv: EmpruntService) {}
  ngOnInit(): void {
    this.initLivres();
    this.emprunt=new Emprunt();
    this.emprunteur=new Adherent();
    if(sessionStorage.getItem('utilisateur')){
      this.emprunteur=JSON.parse(sessionStorage.getItem('utilisateur')!) as Adherent;
    }

  }

  initLivres() {
    this.livreSrv.allLivre().subscribe((livres: Livre[]) => {
      this.livres = livres;
    });
  }

  recherche(){
    let rechercheJson = {
      motifTitre: this.form.get('titre')?.value,
      motifAuteur: this.form.get('auteur')?.value,
      statut: this.form.get('statut')?.value,
      etiquettes: this.etiquettes
    };
    this.livreSrv.recherche(rechercheJson).subscribe((livres) => {
      this.livres = livres
    })
    
  }

  emprunter (livre: Livre) {
    console.debug(livre)
    this.empruntSrv.create(livre).subscribe(() => {
      this.initLivres();
    })
  }
}



