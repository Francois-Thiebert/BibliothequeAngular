import { Component } from '@angular/core';
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

  emprunt!: Emprunt;
  livres:Livre[]=[];
  emprunteur!: Adherent;

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

  emprunter (livre: Livre) {
    this.emprunt.livre=livre
    this.emprunt.emprunteur=this.emprunteur
    this.empruntSrv.create(this.emprunt).subscribe(() => {
      this.initLivres();
    })
  }
}



