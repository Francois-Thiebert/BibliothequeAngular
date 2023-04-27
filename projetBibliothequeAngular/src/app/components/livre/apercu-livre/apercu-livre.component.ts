import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Livre } from 'src/app/model/livre';
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

}


