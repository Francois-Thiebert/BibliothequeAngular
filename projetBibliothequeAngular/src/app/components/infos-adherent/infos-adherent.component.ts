import { Component, OnInit } from '@angular/core';
import { Adherent } from 'src/app/model/adherent';

@Component({
  selector: 'app-infos-adherent',
  templateUrl: './infos-adherent.component.html',
  styleUrls: ['./infos-adherent.component.css']
})
export class InfosAdherentComponent implements OnInit {

  adherent!:Adherent;

  ngOnInit(): void {
    if(sessionStorage.getItem('utilisateur')){
      let utilisateur:Adherent=JSON.parse(sessionStorage.getItem('utilisateur')!) as Adherent;
    }
  }


}
