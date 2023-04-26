import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Livre } from 'src/app/model/livre';
import { LivreService } from 'src/app/services/livre.service';
import { Statut } from 'src/app/model/statut';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatChipEditedEvent, MatChipInputEvent} from '@angular/material/chips';
import { Etiquette } from 'src/app/model/etiquette';

@Component({
  selector: 'app-edit-livre',
  templateUrl: './edit-livre.component.html',
  styleUrls: ['./edit-livre.component.css']
})
export class EditLivreComponent implements OnInit{
  livre!: Livre;
  statuts: Statut[]=[Statut.STATUT_DISPONIBLE,Statut.STATUT_EMPRUNTE,Statut.STATUT_INDISPONIBLE];

  constructor(
    private aR: ActivatedRoute,
    private livreSrv: LivreService,
    private router: Router,
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

  save() {
    let obvResult: Observable<Livre>;
    if (this.livre.id) {
      obvResult = this.livreSrv.update(this.livre);
    } else {
      obvResult = this.livreSrv.create(this.livre);
    }

    obvResult.subscribe(() => {
      this.router.navigateByUrl('/livres');
    });

  }

  compareById(obj1: Livre, obj2: Livre) {
    return obj1 && obj2 && obj1.id == obj2.id;
  }

}
