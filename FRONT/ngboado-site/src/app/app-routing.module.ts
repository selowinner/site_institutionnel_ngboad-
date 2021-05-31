import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

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
import { ContinentAccueilComponent } from './Continental/continent-accueil/continent-accueil.component';
import { PresentationContinentalComponent } from './Continental/presentation-continental/presentation-continental.component';
import { MembresContinentalComponent } from './Continental/membres-continental/membres-continental.component';
import { PartenairesContinentalComponent } from './Continental/partenaires-continental/partenaires-continental.component';
import { BlogContinentalComponent } from './Continental/blog-continental/blog-continental.component';
import { SuggestionPlainteContinentalComponent } from './Continental/suggestion-plainte-continental/suggestion-plainte-continental.component';
import { AgenceFondContinentalComponent } from './Continental/agence-fond-continental/agence-fond-continental.component';
import { AgenceContinentalComponent } from './Continental/agence-continental/agence-continental.component';
import { FondContinentalComponent } from './Continental/fond-continental/fond-continental.component';
import { MissionAccueilContinentalComponent } from './Continental/Mission/mission-accueil-continental/mission-accueil-continental.component';
import { AssistanceContinentalComponent } from './Continental/Mission/assistance-continental/assistance-continental.component';
import { AssistanceProjetContinentalComponent } from './Continental/Mission/assistance-projet-continental/assistance-projet-continental.component';
import { PreventionProjetContinentalComponent } from './Continental/Mission/prevention-projet-continental/prevention-projet-continental.component';
import { ReinsertionProjetContinentalComponent } from './Continental/Mission/reinsertion-projet-continental/reinsertion-projet-continental.component';
import { ReinsertionProgrammeContinentalComponent } from './Continental/Mission/reinsertion-programme-continental/reinsertion-programme-continental.component';
import { DonsContinentalComponent } from './Continental/dons-continental/dons-continental.component';
import { RegionalAccueilComponent } from './Regional/regional-accueil/regional-accueil.component';
import { MembresRegionalComponent } from './Regional/membres-regional/membres-regional.component';
import { PartenairesRegionalComponent } from './Regional/partenaires-regional/partenaires-regional.component';
import { BlogRegionalComponent } from './Regional/blog-regional/blog-regional.component';
import { SuggestionsPlaintesRegionalComponent } from './Regional/suggestions-plaintes-regional/suggestions-plaintes-regional.component';
import { AgenceSousRegionalComponent } from './Sous-regional/agence-sous-regional/agence-sous-regional.component';
import { AgenceFondRegionalComponent } from './Regional/agence-fond-regional/agence-fond-regional.component';
import { AgenceRegionalComponent } from './Regional/agence-regional/agence-regional.component';
import { FondRegionalComponent } from './Regional/fond-regional/fond-regional.component';
import { PresentationRegionalComponent } from './Regional/presentation-regional/presentation-regional.component';
import { MissionAccueilRegionalComponent } from './Regional/Mission/mission-accueil-regional/mission-accueil-regional.component';
import { AssistanceProjetRegionalComponent } from './Regional/Mission/assistance-projet-regional/assistance-projet-regional.component';
import { AssistanceProgrammeRegionalComponent } from './Regional/Mission/assistance-programme-regional/assistance-programme-regional.component';
import { PreventionProjetRegionalComponent } from './Regional/Mission/prevention-projet-regional/prevention-projet-regional.component';
import { PreventionProgrammeRegionalComponent } from './Regional/Mission/prevention-programme-regional/prevention-programme-regional.component';
import { ReinsertionProjetRegionalComponent } from './Regional/Mission/reinsertion-projet-regional/reinsertion-projet-regional.component';
import { ReinsertionProgrammeRegionalComponent } from './Regional/Mission/reinsertion-programme-regional/reinsertion-programme-regional.component';
import { DonsRegionalComponent } from './Regional/dons-regional/dons-regional.component';
import { PaysAccueilComponent } from './Pays/pays-accueil/pays-accueil.component';
import { PresentationsPaysComponent } from './Pays/presentations-pays/presentations-pays.component';
import { MembresPaysComponent } from './Pays/membres-pays/membres-pays.component';
import { PartenairesPaysComponent } from './Pays/partenaires-pays/partenaires-pays.component';
import { BlogPaysComponent } from './Pays/blog-pays/blog-pays.component';
import { SuggestionsPlaintesPaysComponent } from './Pays/suggestions-plaintes-pays/suggestions-plaintes-pays.component';
import { AgenceFondPaysComponent } from './Pays/agence-fond-pays/agence-fond-pays.component';
import { AgencePaysComponent } from './Pays/agence-pays/agence-pays.component';
import { FondPaysComponent } from './Pays/fond-pays/fond-pays.component';
import { MissionPaysComponent } from './Pays/Mission/mission-pays/mission-pays.component';
import { AssistanceProjetPaysComponent } from './Pays/Mission/assistance-projet-pays/assistance-projet-pays.component';
import { AssistanceProjetSousRegionalComponent } from './Sous-regional/Mission/assistance-projet-sous-regional/assistance-projet-sous-regional.component';
import { PreventionProjetPaysComponent } from './Pays/Mission/prevention-projet-pays/prevention-projet-pays.component';
import { PreventionProgrammePaysComponent } from './Pays/Mission/prevention-programme-pays/prevention-programme-pays.component';
import { ReinsertionProjetPaysComponent } from './Pays/Mission/reinsertion-projet-pays/reinsertion-projet-pays.component';
import { ReinsertionProgrammePaysComponent } from './Pays/Mission/reinsertion-programme-pays/reinsertion-programme-pays.component';
import { DonsPaysComponent } from './Pays/dons-pays/dons-pays.component';

const routes: Routes = [
  {path: '', component: HomeComponent}, 
  {path: 'membres', component: MembresComponent},
  {path: 'partenaires', component: PartenairesComponent},
  {path: 'blog', component: BlogComponent},  
  {path: 'suggestions-plaintes',component: SuggestionsPlaintesComponent},  
  {path: 'agence-fond',component: AgenceFondComponent},  
  {path: 'agence',component: AgenceComponent  },
  {path: 'fond',component: FondComponent  },
  {path: 'presentation',component: PresentationComponent  },
  {path: 'mission-accueil', component: MissionAccueilComponent },
  {path: 'assistance-projet', component: AssistanceProjetComponent },
  {path: 'assistance-programme', component: AssistanceProgrammeComponent },
  {path: 'prevention-projet', component: PreventionProjetComponent },
  {path: 'prevention-programme', component: PreventionProgrammeComponent },
  {path: 'reinsertion-projet', component: ReinsertionProjetComponent },
  {path: 'reinsertion-programme', component: ReinsertionProgrammeComponent },
  {path: 'dons', component: DonsComponent},
 

  //routes site continental
  {path: 'continent-accueil',component: ContinentAccueilComponent},
  {path: 'presentation-continental',component: PresentationContinentalComponent},
  {path: 'membres-continental',component: MembresContinentalComponent},
  {path: 'partenaires-continental',component: PartenairesContinentalComponent},
  {path: 'blog-continental',component: BlogContinentalComponent},  
  {path: 'suggestion-plainte-continental',component: SuggestionPlainteContinentalComponent},  
  {path: 'agence-fond-continental', component: AgenceFondContinentalComponent},  
  {path: 'agence-continental', component: AgenceContinentalComponent },
  {path: 'fond-continental', component: FondContinentalComponent },
  {path: 'presentation-continental', component: PresentationContinentalComponent },
  {path: 'mission-accueil-continental', component: MissionAccueilContinentalComponent },
  {path: 'assistance-projet-continental', component: AssistanceProjetContinentalComponent },
  {path: 'assistance-continental', component: AssistanceContinentalComponent },
  {path: 'prevention-projet-continental', component: PreventionProjetContinentalComponent },
  {path: 'prevention-programme-continental', component: PreventionProjetContinentalComponent },
  {path: 'reinsertion-projet-continental', component: ReinsertionProjetContinentalComponent },
  {path: 'reinsertion-programme-continental', component: ReinsertionProgrammeContinentalComponent },
  {path: 'dons-continental', component: DonsContinentalComponent},

  //routes site regional
  {path: 'regional-accueil', component: RegionalAccueilComponent},
  {path: 'presentation-regional', component: PresentationContinentalComponent},
  {path: 'membres-regional', component: MembresRegionalComponent},
  {path: 'partenaires-regional', component: PartenairesRegionalComponent},
  {path: 'blog-regional', component: BlogRegionalComponent},  
  {path: 'suggestions-plaintes-regional', component: SuggestionsPlaintesRegionalComponent},  
  {path: 'agence-fond-regional', component: AgenceFondRegionalComponent},  
  {path: 'agence-regional', component: AgenceRegionalComponent},
  {path: 'fond-regional', component: FondRegionalComponent},
  {path: 'presentation-regional', component: PresentationRegionalComponent},
  {path: 'mission-accueil-regional', component: MissionAccueilRegionalComponent },
  {path: 'assistance-projet-regional', component: AssistanceProjetRegionalComponent },
  {path: 'assistance-programme-regional', component: AssistanceProgrammeRegionalComponent },
  {path: 'prevention-projet-regional', component: PreventionProjetRegionalComponent },
  {path: 'prevention-programme-regional', component: PreventionProgrammeRegionalComponent },
  {path: 'reinsertion-projet-regional', component: ReinsertionProjetRegionalComponent },
  {path: 'reinsertion-programme-regional', component: ReinsertionProgrammeRegionalComponent },
  {path: 'dons-regional', component: DonsRegionalComponent },

  //routes site pays
  // {path: 'pays-accueil', component: PaysAccueilComponent },
  // {path: 'presentation-pays', component: PresentationsPaysComponent },
  // {path: 'membres-pays', component: MembresPaysComponent },
  // {path: 'partenaires-pays', component: PartenairesPaysComponent },
  // {path: 'blog-pays', component: BlogPaysComponent },  
  // {path: 'suggestions-plaintes-pays', component: SuggestionsPlaintesPaysComponent },  
  // {path: 'agence-fond-pays', component: AgenceFondPaysComponent },  
  // {path: 'agence-pays', component: AgencePaysComponent},
  // {path: 'fond-pays', component: FondPaysComponent},
  // {path: 'presentation-pays', component: PresentationsPaysComponent},
  // {path: 'mission-accueil-pays', component: MissionPaysComponent},
  // {path: 'assistance-projet-pays', component: AssistanceProjetPaysComponent},
  // {path: 'assistance-programme-pays', component: AssistanceProjetSousRegionalComponent},
  // {path: 'prevention-projet-pays', component: PreventionProjetPaysComponent},
  // {path: 'prevention-programme-pays', component: PreventionProgrammePaysComponent},
  // {path: 'reinsertion-projet-pays', component: ReinsertionProjetPaysComponent},
  // {path: 'reinsertion-programme-pays', component: ReinsertionProgrammePaysComponent},
  // {path: 'dons-pays', component: DonsPaysComponent},

    //routes site sous-regional
    // {path: 'pays-accueil', component: PaysAccueilComponent },
    // {path: 'presentation-pays', component: PresentationsPaysComponent },
    // {path: 'membres-pays', component: MembresPaysComponent },
    // {path: 'partenaires-pays', component: PartenairesPaysComponent },
    // {path: 'blog-pays', component: BlogPaysComponent },  
    // {path: 'suggestions-plaintes-pays', component: SuggestionsPlaintesPaysComponent },  
    // {path: 'agence-fond-pays', component: AgenceFondPaysComponent },  
    // {path: 'agence-pays', component: AgencePaysComponent},
    // {path: 'fond-pays', component: FondPaysComponent},
    // {path: 'presentation-pays', component: PresentationsPaysComponent},
    // {path: 'mission-accueil-pays', component: MissionPaysComponent},
    // {path: 'assistance-projet-pays', component: AssistanceProjetPaysComponent},
    // {path: 'assistance-programme-pays', component: AssistanceProjetSousRegionalComponent},
    // {path: 'prevention-projet-pays', component: PreventionProjetPaysComponent},
    // {path: 'prevention-programme-pays', component: PreventionProgrammePaysComponent},
    // {path: 'reinsertion-projet-pays', component: ReinsertionProjetPaysComponent},
    // {path: 'reinsertion-programme-pays', component: ReinsertionProgrammePaysComponent},
    // {path: 'dons-pays', component: DonsPaysComponent},

    //routes site district
    // {path: 'pays-accueil', component: PaysAccueilComponent },
    // {path: 'presentation-pays', component: PresentationsPaysComponent },
    // {path: 'membres-pays', component: MembresPaysComponent },
    // {path: 'partenaires-pays', component: PartenairesPaysComponent },
    // {path: 'blog-pays', component: BlogPaysComponent },  
    // {path: 'suggestions-plaintes-pays', component: SuggestionsPlaintesPaysComponent },  
    // {path: 'agence-fond-pays', component: AgenceFondPaysComponent },  
    // {path: 'agence-pays', component: AgencePaysComponent},
    // {path: 'fond-pays', component: FondPaysComponent},
    // {path: 'presentation-pays', component: PresentationsPaysComponent},
    // {path: 'mission-accueil-pays', component: MissionPaysComponent},
    // {path: 'assistance-projet-pays', component: AssistanceProjetPaysComponent},
    // {path: 'assistance-programme-pays', component: AssistanceProjetSousRegionalComponent},
    // {path: 'prevention-projet-pays', component: PreventionProjetPaysComponent},
    // {path: 'prevention-programme-pays', component: PreventionProgrammePaysComponent},
    // {path: 'reinsertion-projet-pays', component: ReinsertionProjetPaysComponent},
    // {path: 'reinsertion-programme-pays', component: ReinsertionProgrammePaysComponent},
    // {path: 'dons-pays', component: DonsPaysComponent},

    //routes site sections//
    // {path: 'pays-accueil', component: PaysAccueilComponent },
    // {path: 'presentation-pays', component: PresentationsPaysComponent },
    // {path: 'membres-pays', component: MembresPaysComponent },
    // {path: 'partenaires-pays', component: PartenairesPaysComponent },
    // {path: 'blog-pays', component: BlogPaysComponent },  
    // {path: 'suggestions-plaintes-pays', component: SuggestionsPlaintesPaysComponent },  
    // {path: 'agence-fond-pays', component: AgenceFondPaysComponent },  
    // {path: 'agence-pays', component: AgencePaysComponent},
    // {path: 'fond-pays', component: FondPaysComponent},
    // {path: 'presentation-pays', component: PresentationsPaysComponent},
    // {path: 'mission-accueil-pays', component: MissionPaysComponent},
    // {path: 'assistance-projet-pays', component: AssistanceProjetPaysComponent},
    // {path: 'assistance-programme-pays', component: AssistanceProjetSousRegionalComponent},
    // {path: 'prevention-projet-pays', component: PreventionProjetPaysComponent},
    // {path: 'prevention-programme-pays', component: PreventionProgrammePaysComponent},
    // {path: 'reinsertion-projet-pays', component: ReinsertionProjetPaysComponent},
    // {path: 'reinsertion-programme-pays', component: ReinsertionProgrammePaysComponent},
    // {path: 'dons-pays', component: DonsPaysComponent},

    //routes site comit-veille
    // {path: 'pays-accueil', component: PaysAccueilComponent },
    // {path: 'presentation-pays', component: PresentationsPaysComponent },
    // {path: 'membres-pays', component: MembresPaysComponent },
    // {path: 'partenaires-pays', component: PartenairesPaysComponent },
    // {path: 'blog-pays', component: BlogPaysComponent },  
    // {path: 'suggestions-plaintes-pays', component: SuggestionsPlaintesPaysComponent },  
    // {path: 'agence-fond-pays', component: AgenceFondPaysComponent },  
    // {path: 'agence-pays', component: AgencePaysComponent},
    // {path: 'fond-pays', component: FondPaysComponent},
    // {path: 'presentation-pays', component: PresentationsPaysComponent},
    // {path: 'mission-accueil-pays', component: MissionPaysComponent},
    // {path: 'assistance-projet-pays', component: AssistanceProjetPaysComponent},
    // {path: 'assistance-programme-pays', component: AssistanceProjetSousRegionalComponent},
    // {path: 'prevention-projet-pays', component: PreventionProjetPaysComponent},
    // {path: 'prevention-programme-pays', component: PreventionProgrammePaysComponent},
    // {path: 'reinsertion-projet-pays', component: ReinsertionProjetPaysComponent},
    // {path: 'reinsertion-programme-pays', component: ReinsertionProgrammePaysComponent},
    // {path: 'dons-pays', component: DonsPaysComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
