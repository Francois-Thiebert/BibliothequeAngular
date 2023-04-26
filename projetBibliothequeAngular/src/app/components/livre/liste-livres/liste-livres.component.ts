import { Component, OnInit } from '@angular/core';
import { Emprunt } from 'src/app/model/emprunt';
import { Livre } from 'src/app/model/livre';
import { Statut } from 'src/app/model/statut';
import { LivreService } from 'src/app/services/livre.service';
import { EmpruntService } from 'src/app/services/emprunt.service';


@Component({
  selector: 'app-liste-livres',
  templateUrl: './liste-livres.component.html',
  styleUrls: ['./liste-livres.component.css']
})

// liste pour les admins
export class ListeLivresComponent implements OnInit{
  livres: Livre[] = [];

  constructor(private livreSrv: LivreService, private empruntSrv: EmpruntService) {}
  ngOnInit(): void {
    this.initLivres();
  }

  initLivres() {
    this.livreSrv.allLivre().subscribe((livres: Livre[]) => {
      this.livres = livres;
    });
  }

  delete (id: number) {
    this.livreSrv.delete(id).subscribe(() => {
      this.initLivres();
    })
  }

  rendre(id: number): void {
    this.livreSrv.getById(id).subscribe((livre: Livre) => {
      this.livreSrv.getEmpruntActif(id).subscribe((emprunt: Emprunt) => {
        emprunt.rendu = true
      })
      livre.statut = Statut.STATUT_DISPONIBLE
      //TODO on update les QUE SI ON A TROUVÉ UN EMPRUNT ACTIFS, sinon on ne modif pas le statut du livre
      this.livreSrv.update(livre).subscribe(() => this.initLivres())
    })   

  }

}
