import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { LinkComponent } from './components/link/link.component';
import { InscriptionComponent } from './components/inscription/inscription.component';
import { CompteComponent } from './components/compte/compte.component';
import { ListeLivresComponent } from './components/livre/liste-livres/liste-livres.component';
import { EditLivreComponent } from './components/livre/edit-livre/edit-livre.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ListeAdherentsComponent } from './components/adherent/liste-adherents/liste-adherents.component';
import { EditAdherentComponent } from './components/adherent/edit-adherent/edit-adherent.component';
import { EditAdministrateurComponent } from './components/adherent/edit-administrateur/edit-administrateur.component';
import { ListeAdministrateursComponent } from './components/adherent/liste-administrateurs/liste-administrateurs.component';
import { LivreComponent } from './components/livre/livre/livre.component';
import { EmprunterComponent } from './components/emprunter/emprunter.component';
import { InfosAdherentComponent } from './components/infos-adherent/infos-adherent.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthInterceptor } from './interceptor/auth.interceptor';
import { ApercuLivreComponent } from './components/livre/apercu-livre/apercu-livre.component';



@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LoginComponent,
    HomeComponent,
    LinkComponent,
    InscriptionComponent,
    CompteComponent,
    ListeLivresComponent,
    EditLivreComponent,
    NotFoundComponent,
    ListeAdherentsComponent,
    EditAdherentComponent,
    EditAdministrateurComponent,
    ListeAdministrateursComponent,
    LivreComponent,
    EmprunterComponent,
    InfosAdherentComponent,
    ApercuLivreComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
