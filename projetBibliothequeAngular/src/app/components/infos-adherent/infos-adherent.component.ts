import { Component, OnInit } from '@angular/core';
import { Adherent } from 'src/app/model/adherent';
import { Emprunt } from 'src/app/model/emprunt';
import { Livre } from 'src/app/model/livre';
import { Statut } from 'src/app/model/statut';
import { EmpruntService } from 'src/app/services/emprunt.service';
import { LivreService } from 'src/app/services/livre.service';

@Component({
  selector: 'app-infos-adherent',
  templateUrl: './infos-adherent.component.html',
  styleUrls: ['./infos-adherent.component.css']
})
export class InfosAdherentComponent implements OnInit {

  constructor(private empruntSrv: EmpruntService, private livreSrv: LivreService) {}

  adherent!:Adherent;
  emprunts:Emprunt[]=[];

  initEmprunt() {
    this.empruntSrv.EmpruntByUser(this.adherent.id!).subscribe((emprunts: Emprunt[]) => {
    this.emprunts = emprunts;
    });
    // this.empruntSrv.allEmprunt().subscribe((emprunts: Emprunt[]) => {
    //   this.emprunts = emprunts;
    //   });
  }

  ngOnInit(): void {
    if(sessionStorage.getItem('utilisateur')){
      this.adherent=JSON.parse(sessionStorage.getItem('utilisateur')!) as Adherent;
      
    }
    this.initEmprunt(); // Tu avais oublié d'ajouter cette ligne François espèce de faquin ;)
    this.adherent.emprunts=this.emprunts;
  }

  rendre(emprunt: Emprunt): void {
    // changer le statut du livre en DISPONIBLE
    if(emprunt.livre != undefined){
      emprunt.livre.statut = Statut.STATUT_DISPONIBLE
      this.livreSrv.update(emprunt.livre).subscribe()
    }
    // changer le statut de l'emprunt en RENDU = vrai
    emprunt.rendu = true
    // console.debug(emprunt)
    this.empruntSrv.update(emprunt).subscribe(() => {
      this.initEmprunt();
    })

  }

 

}
