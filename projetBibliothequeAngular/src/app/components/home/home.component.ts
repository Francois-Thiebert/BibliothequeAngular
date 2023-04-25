import { Component } from '@angular/core';
import { Adherent } from 'src/app/model/adherent';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  get welcome() {
      let _welcome = 'bonjour ';
      if (sessionStorage.getItem('utilisateur')) {
        let compte = JSON.parse(sessionStorage.getItem('utilisateur')!) as Adherent;
        _welcome = _welcome + compte.login;
      }
      return _welcome;
  }

}

