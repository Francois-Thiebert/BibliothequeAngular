import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Adherent } from 'src/app/model/adherent';
import { AdherentService } from 'src/app/services/adherent.service';

@Component({
  selector: 'app-edit-adherent',
  templateUrl: './edit-adherent.component.html',
  styleUrls: ['./edit-adherent.component.css']
})
export class EditAdherentComponent implements OnInit{
  adherent!: Adherent;

  constructor(
    private aR: ActivatedRoute,
    private adherentSrv: AdherentService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.adherent = new Adherent();
    this.aR.params.subscribe((params) => {
      if (params['id']) {
        this.adherentSrv.getById(params['id']).subscribe((adherent: Adherent) => {
          this.adherent = adherent;
        });
      }
    });
  }

  save() {
    let obvResult: Observable<Adherent>;
    if (this.adherent.id) {
      obvResult = this.adherentSrv.update(this.adherent);
    } else {
      obvResult = this.adherentSrv.create(this.adherent);
    }
    obvResult.subscribe(() => {
      this.router.navigateByUrl('/adherent');
    });
  }

  compareById(obj1: Adherent, obj2: Adherent) {
    return obj1 && obj2 && obj1.id == obj2.id;
  }
}
