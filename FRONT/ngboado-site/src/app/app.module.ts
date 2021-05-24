import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Mondial/home/home.component';
import { AgenceComponent } from './Mondial/agence/agence.component';
import { AgenceFondComponent } from './Mondial/agence-fond/agence-fond.component';
import { FondComponent } from './Mondial/fond/fond.component';
import { MembresComponent } from './Mondial/membres/membres.component';
import { PartenairesComponent } from './Mondial/partenaires/partenaires.component';
import { BlogComponent } from './Mondial/blog/blog.component';
import { PresentationComponent } from './Mondial/presentation/presentation.component';
import { DonsComponent } from './Mondial/dons/dons.component';
import { SuggestionsPlaintesComponent } from './Mondial/suggestions-plaintes/suggestions-plaintes.component';
import { MissionAccueilComponent } from './Mondial/Mission/mission-accueil/mission-accueil.component';
import { AssistanceProgrammeComponent } from './Mondial/Mission/assistance-programme/assistance-programme.component';
import { AssistanceProjetComponent } from './Mondial/Mission/assistance-projet/assistance-projet.component';
import { PreventionProjetComponent } from './Mondial/Mission/prevention-projet/prevention-projet.component';
import { PreventionProgrammeComponent } from './Mondial/Mission/prevention-programme/prevention-programme.component';
import { ReinsertionProjetComponent } from './Mondial/Mission/reinsertion-projet/reinsertion-projet.component';
import { ReinsertionProgrammeComponent } from './Mondial/Mission/reinsertion-programme/reinsertion-programme.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AgenceComponent,
    AgenceFondComponent,
    FondComponent,
    MembresComponent,
    PartenairesComponent,
    BlogComponent,
    PresentationComponent,
    DonsComponent,
    SuggestionsPlaintesComponent,
    MissionAccueilComponent,
    AssistanceProgrammeComponent,
    AssistanceProjetComponent,
    PreventionProjetComponent,
    PreventionProgrammeComponent,
    ReinsertionProjetComponent,
    ReinsertionProgrammeComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    // FormsModule,
    HttpClientModule,
    // ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
