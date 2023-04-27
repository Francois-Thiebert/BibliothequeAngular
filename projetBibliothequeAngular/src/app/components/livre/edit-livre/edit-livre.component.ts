import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Livre } from 'src/app/model/livre';
import { LivreService } from 'src/app/services/livre.service';
import { Statut } from 'src/app/model/statut';
import { EtiquetteNom } from 'src/app/model/etiquette-nom';
import { EtiquetteService } from 'src/app/services/etiquette.service';

@Component({
  selector: 'app-edit-livre',
  templateUrl: './edit-livre.component.html',
  styleUrls: ['./edit-livre.component.css']
})
export class EditLivreComponent implements OnInit{
  livre!: Livre;
  statuts: Statut[]=[Statut.STATUT_DISPONIBLE,Statut.STATUT_EMPRUNTE,Statut.STATUT_INDISPONIBLE];
  etiquettesSelect: EtiquetteNom[] = [];
  etiquettesEnBase: EtiquetteNom[] = [];
  // string[] = ["DISPONIBLE","EMPRUNTE","INDISPONIBLE"];

  constructor(
    private aR: ActivatedRoute,
    private livreSrv: LivreService,
    private router: Router,
    private etiquetteSrv: EtiquetteService,
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

    this.initEtiquettes();
  }

  initEtiquettes() {
    this.etiquetteSrv.allEtiquettes().subscribe((etiquettes: EtiquetteNom[]) => {
      this.etiquettesEnBase = etiquettes;
      this.etiquettesEnBase.shift();
      console.debug(this.etiquettesEnBase)
    });
  }

  ajout(etiquette: EtiquetteNom){
    if(this.etiquettesSelect.includes(etiquette)){
      this.etiquettesSelect=this.etiquettesSelect.filter(e => e !== etiquette);
    }
    else {
      this.etiquettesSelect.push(etiquette);
    }
  }

  save() {
    let obvResult: Observable<Livre>;
    this.livre.etiquettes=this.etiquettesSelect;
    if (this.livre.id) {
      obvResult = this.livreSrv.updateWithEtiquettes(this.livre);
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
