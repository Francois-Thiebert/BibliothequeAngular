import { Component, OnInit } from '@angular/core';
import { Adherent } from 'src/app/model/adherent';
import { AdherentService } from 'src/app/services/adherent.service';

@Component({
  selector: 'app-liste-adherents',
  templateUrl: './liste-adherents.component.html',
  styleUrls: ['./liste-adherents.component.css']
})
export class ListeAdherentsComponent implements OnInit{
  adherents: Adherent[] = [];

  constructor(private adherentSrv: AdherentService) {}
  ngOnInit(): void {
    this.initAdherents();
  }

  initAdherents() {
    this.adherentSrv.allAdherent().subscribe((adherents: Adherent[]) => {
      this.adherents = adherents;
    });
  }

  delete (id: number) {
    this.adherentSrv.delete(id).subscribe(() => {
      this.initAdherents();
    })
  }
}
