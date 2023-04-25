import { Component, OnInit } from '@angular/core';
import { Adherent } from 'src/app/model/adherent';
import { Emprunt } from 'src/app/model/emprunt';
import { EmpruntService } from 'src/app/services/emprunt.service';

@Component({
  selector: 'app-infos-adherent',
  templateUrl: './infos-adherent.component.html',
  styleUrls: ['./infos-adherent.component.css']
})
export class InfosAdherentComponent implements OnInit {

  constructor(private empruntSrv: EmpruntService) {}

  adherent!:Adherent;
  emprunts:Emprunt[]=[];

  initEmprunt() {
    this.empruntSrv.EmpruntByUser(this.adherent.id!).subscribe((emprunts: Emprunt[]) => {
    this.emprunts = emprunts;
    });
  }

  ngOnInit(): void {
    if(sessionStorage.getItem('utilisateur')){
      this.adherent=JSON.parse(sessionStorage.getItem('utilisateur')!) as Adherent;
      this.adherent.emprunts=this.emprunts;
    }
  }


}
