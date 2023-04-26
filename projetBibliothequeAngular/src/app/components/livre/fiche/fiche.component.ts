import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Livre } from 'src/app/model/livre';
import { EmpruntService } from 'src/app/services/emprunt.service';
import { LivreService } from 'src/app/services/livre.service';

@Component({
  selector: 'app-fiche',
  templateUrl: './fiche.component.html',
  styleUrls: ['./fiche.component.css']
})
export class FicheComponent implements OnInit{
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
    });
  }

}
