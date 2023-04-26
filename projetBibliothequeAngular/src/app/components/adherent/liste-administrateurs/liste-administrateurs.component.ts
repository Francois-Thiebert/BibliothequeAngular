import { Component, OnInit } from '@angular/core';
import { Administrateur } from 'src/app/model/administrateur';
import { AdministrateurService } from 'src/app/services/administrateur.service';

@Component({
  selector: 'app-liste-administrateurs',
  templateUrl: './liste-administrateurs.component.html',
  styleUrls: ['./liste-administrateurs.component.css']
})
export class ListeAdministrateursComponent implements OnInit{
  administrateurs: Administrateur[] = [];

  constructor(private administrateurSrv: AdministrateurService) {}
  ngOnInit(): void {
    this.initAdministrateurs();
  }

  initAdministrateurs() {
    this.administrateurSrv.allAdministrateur().subscribe((administrateurs: Administrateur[]) => {
      this.administrateurs = administrateurs;
    });
  }

  delete (id: number) {
    this.administrateurSrv.delete(id).subscribe(() => {
      this.initAdministrateurs();
    })
  }
}
