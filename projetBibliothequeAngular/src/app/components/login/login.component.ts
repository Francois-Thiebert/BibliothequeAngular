import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Adherent } from 'src/app/model/adherent';
import { Utilisateur } from 'src/app/model/utilisateur';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  login: string = '';
  password: string = '';
  showError = false;
  hide = true;

  constructor(private loginSrv: LoginService, private router: Router) {}

  check(form: NgForm) {
    // console.debug(form);
    // console.debug(form.controls['inputLogin']);
    if (form.valid) {
      this.loginSrv.login(this.login, this.password).subscribe({
        next: (infos: Utilisateur) => {
          this.showError = false;
          sessionStorage.setItem(
            'token',
            'Basic ' + window.btoa(this.login + ':' + this.password)
          );
          sessionStorage.setItem('utilisateur', JSON.stringify(infos));
          this.router.navigateByUrl('/home');
        },
        error: (error: any) => {
          console.debug(error);
          this.showError = true;
        },
      });
    }
  }

  rien(form: NgForm) {

  }
}
