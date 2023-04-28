import { Component, OnInit } from '@angular/core';
import { Adherent } from 'src/app/model/adherent';
import { Livre } from 'src/app/model/livre';
import { Role } from 'src/app/model/role';
import { Utilisateur } from 'src/app/model/utilisateur';
import { EmpruntService } from 'src/app/services/emprunt.service';
import { LivreService } from 'src/app/services/livre.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  livres: Livre[] = [];

  get welcome() {
      let _welcome = 'Bonjour ';
      if (sessionStorage.getItem('utilisateur')) {
        let utilisateur = JSON.parse(sessionStorage.getItem('utilisateur')!) as Adherent;
        _welcome = _welcome + utilisateur.prenom + " " + utilisateur.nom + ' !';
      }
      return _welcome;
  }

  constructor(private livreSrv: LivreService, private empruntSrv: EmpruntService) {}
  ngOnInit(): void {
    this.initLivres();
  }

  initLivres() {
    this.livreSrv.allLivre().subscribe((livres: Livre[]) => {
      this.livres = livres;
    });
  }

  get logged(): boolean {
    return sessionStorage.getItem('token') ? true : false;
  }

  get admin(): boolean {
    if (sessionStorage.getItem('utilisateur')) {
      let utilisateur: Utilisateur  = JSON.parse(
        sessionStorage.getItem('utilisateur')!
      ) as Utilisateur;
      return utilisateur.role == Role.ROLE_ADMIN;
    }
    return false;
  }

  get adherent(): boolean {
    if (sessionStorage.getItem('utilisateur')) {
      let utilisateur: Utilisateur  = JSON.parse(
        sessionStorage.getItem('utilisateur')!
      ) as Utilisateur;
      return utilisateur.role == Role.ROLE_ADHERENT;
    }
    return false;
  }

}

