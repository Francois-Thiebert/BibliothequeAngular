import { Component, OnInit } from '@angular/core';
import { AbstractControl, AsyncValidatorFn, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, map } from 'rxjs';
import { UtilisateurService } from 'src/app/services/utilisateur.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit{
  form!: FormGroup;

  constructor(private userSrv: UtilisateurService, private router: Router) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      prenom: new FormControl('', Validators.required),
      nom: new FormControl('', Validators.required),

      compteGroup: new FormGroup({
        login: new FormControl(
          '', Validators.required, this.loginFree(this.userSrv)
        ),
        passwordGroup: new FormGroup({
          password: new FormControl(
            '', Validators.pattern(/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).{3,}$/)
          ),
          confirm: new FormControl('',)
        },
        this.passwordAndConfirmEquals
        ),
      },
      this.loginAndPasswordNotEquals
      ),
    });

  }

  loginFree(srv: UtilisateurService): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      console.debug('check');
      return this.userSrv.checkLogin(control.value).pipe(
        map((exist: boolean) => {
          return exist ? { loginExist: true } : null;
        })
      );
    };
  }

  passwordAndConfirmEquals(control: AbstractControl): ValidationErrors | null {
    let group = control as FormGroup;
    if (group.get('password')?.invalid) {
      return null;
    }
    return group.get('password')?.value == group.get('confirm')?.value
      ? null
      : { passwordAndConfirmNotEqual: true };
  }

  loginAndPasswordNotEquals(control: AbstractControl): ValidationErrors | null {
    let group = control as FormGroup;
    if (group.get('login')?.invalid) {
      return null;
    }

    return group.get('login')?.value != group.get('passwordGroup.password')?.value
      ? null
      : { loginAndPasswordEquals: true };
  }

  submit() {
    let utilisateurJson = {
      prenom: this.form.get('prenom')?.value,
      nom: this.form.get('nom')?.value,
      compte: {
        login: this.form.get('compteGroup.login')?.value,
        password: this.form.get('compteGroup.passwordGroup.password')?.value,
      },
    };
    this.userSrv.inscription(utilisateurJson).subscribe((utilisateur) => {
      console.debug(utilisateur);
      this.router.navigateByUrl('/login')
    })
  }

}
