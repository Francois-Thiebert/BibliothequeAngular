import { Component, OnInit } from '@angular/core';
import { Livre } from 'src/app/model/livre';
import { LivreService } from 'src/app/services/livre.service';


@Component({
  selector: 'app-liste-livres',
  templateUrl: './liste-livres.component.html',
  styleUrls: ['./liste-livres.component.css']
})

// liste pour les admins
export class ListeLivresComponent implements OnInit{
  livres: Livre[] = [];

  constructor(private livreSrv: LivreService) {}
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



}
