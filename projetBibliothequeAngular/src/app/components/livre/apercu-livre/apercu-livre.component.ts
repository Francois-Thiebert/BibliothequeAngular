import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Livre } from 'src/app/model/livre';
import { Role } from 'src/app/model/role';
import { Utilisateur } from 'src/app/model/utilisateur';
import { EmpruntService } from 'src/app/services/emprunt.service';
import { LivreService } from 'src/app/services/livre.service';

@Component({
  selector: 'app-apercu-livre',
  templateUrl: './apercu-livre.component.html',
  styleUrls: ['./apercu-livre.component.css']
})
export class ApercuLivreComponent implements OnInit{
  livre!: Livre;

  constructor(
    private aR: ActivatedRoute,
    private livreSrv: LivreService,
    private router: Router,
    private empruntSrv: EmpruntService,
  ) {}

  ngOnInit(): void {
    this.livre = new Livre();
    this.aR.params.subscribe((params) => {
      if (params['id']) {
        this.livreSrv.getById(params['id']).subscribe((livre: Livre) => {
          this.livre = livre;
        });
      }
      console.debug(this.livre.etiquettes)
    });
  }

  emprunter (livre: Livre) {
    console.debug(livre)
    this.empruntSrv.create(livre).subscribe(() => {
    })
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


