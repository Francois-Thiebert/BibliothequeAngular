import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { InscriptionComponent } from './components/inscription/inscription.component';
import { AuthGuardService } from './services/auth-guard.service';
import { AnonymousGuardService } from './services/anonymous-guard.service';
import { AdherentGuardService } from './services/adherent-guard.service';
import { AdminGuardService } from './services/admin-guard.service';
import { UserGuardService } from './services/user-guard.service';
import { ListeLivresComponent } from './components/livre/liste-livres/liste-livres.component';
import { EditLivreComponent } from './components/livre/edit-livre/edit-livre.component';
import { EmprunterComponent } from './components/emprunter/emprunter.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ListeAdherentsComponent } from './components/adherent/liste-adherents/liste-adherents.component';
import { EditAdherentComponent } from './components/adherent/edit-adherent/edit-adherent.component';
import { LivreComponent } from './components/livre/livre/livre.component';
import { InfosAdherentComponent } from './components/infos-adherent/infos-adherent.component';
import { EditAdministrateurComponent } from './components/adherent/edit-administrateur/edit-administrateur.component';
import { ListeAdministrateursComponent } from './components/adherent/liste-administrateurs/liste-administrateurs.component';
import { ApercuLivreComponent } from './components/livre/apercu-livre/apercu-livre.component';

const routes: Routes = [
  {path: 'login',
    component: LoginComponent,
    canActivate: [AnonymousGuardService],},

  { path: 'home',
    component: HomeComponent},

  { path: 'inscription',
    component: InscriptionComponent,
    canActivate: [AnonymousGuardService],},

  { path: 'livres',
  component: ListeLivresComponent},

  { path: 'livre/add',
  component: EditLivreComponent},

  { path: 'livre/edit/:id',
  component: EditLivreComponent},

  { path: 'livre/apercu/:id',
  component: ApercuLivreComponent},

  { path: 'livre/:id',
  component: LivreComponent},

  { path: 'adherents',
  component: ListeAdherentsComponent},

  { path: 'adherent/add',
  component: EditAdherentComponent},

  { path: 'adherent/edit/:id',
  component: EditAdherentComponent},

  { path: 'emprunter',
  component: EmprunterComponent},

  { path: 'infos-adherent',
  component: InfosAdherentComponent},

  { path: 'administrateurs',
  component: ListeAdministrateursComponent},

  { path: 'administrateur/add',
  component: EditAdministrateurComponent},


  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
