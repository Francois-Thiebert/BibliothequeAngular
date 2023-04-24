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
  component: ListeLivresComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
