
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Administrateur } from 'src/app/model/administrateur';
import { AdministrateurService } from 'src/app/services/administrateur.service';

@Component({
  selector: 'app-edit-administrateur',
  templateUrl: './edit-administrateur.component.html',
  styleUrls: ['./edit-administrateur.component.css']
})
export class EditAdministrateurComponent implements OnInit{
  administrateur!: Administrateur;

  constructor(
    private aR: ActivatedRoute,
    private administrateurSrv: AdministrateurService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.administrateur = new Administrateur();
    this.aR.params.subscribe((params) => {
      if (params['id']) {
        this.administrateurSrv.getById(params['id']).subscribe((administrateur: Administrateur) => {
          this.administrateur = administrateur;
        });
      }
    });
  }

  save() {
    let obvResult: Observable<Administrateur>;
    if (this.administrateur.id) {
      obvResult = this.administrateurSrv.update(this.administrateur);
    } else {
      obvResult = this.administrateurSrv.create(this.administrateur);
    }
    obvResult.subscribe(() => {
      this.router.navigateByUrl('/administrateur');
    });
  }

  compareById(obj1: Administrateur, obj2: Administrateur) {
    return obj1 && obj2 && obj1.id == obj2.id;
  }
}
