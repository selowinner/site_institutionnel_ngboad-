import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//les composants du site mondial
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

//les composants du site continental
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

//les composants du site regional
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

//les composants du site pays
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
import { ComitVeilleAccueilComponent } from './Comit-veille/comit-veille-accueil/comit-veille-accueil.component';
import { PresentationComitVeilleComponent } from './Comit-veille/presentation-comit-veille/presentation-comit-veille.component';
import { MissionAccueilComitVeilleComponent } from './Comit-veille/Mission/mission-accueil-comit-veille/mission-accueil-comit-veille.component';
import { AssistanceProgrammeComitVeilleComponent } from './Comit-veille/Mission/assistance-programme-comit-veille/assistance-programme-comit-veille.component';
import { AssistanceProjetComitVeilleComponent } from './Comit-veille/Mission/assistance-projet-comit-veille/assistance-projet-comit-veille.component';
import { PreventionProjetComitVeilleComponent } from './Comit-veille/Mission/prevention-projet-comit-veille/prevention-projet-comit-veille.component';
import { PreventionProgrammeComitVeilleComponent } from './Comit-veille/Mission/prevention-programme-comit-veille/prevention-programme-comit-veille.component';
import { ReinsertionProgrammeComitVeilleComponent } from './Comit-veille/Mission/reinsertion-programme-comit-veille/reinsertion-programme-comit-veille.component';
import { ReinsertionProjetComitVeilleComponent } from './Comit-veille/Mission/reinsertion-projet-comit-veille/reinsertion-projet-comit-veille.component';

//les composants du site regional
import { SousRegionalAccueilComponent } from './Sous-regional/sous-regional-accueil/sous-regional-accueil.component';
import { PresentationSousRegionalComponent } from './Sous-regional/presentation-sous-regional/presentation-sous-regional.component';
import { MembresSousRegionalComponent } from './Sous-regional/membres-sous-regional/membres-sous-regional.component';
import { PartenairesSousRegionalComponent } from './Sous-regional/partenaires-sous-regional/partenaires-sous-regional.component';
import { BlogSousRegionalComponent } from './Sous-regional/blog-sous-regional/blog-sous-regional.component';
import { SuggestionsPlaintesSousRegionalComponent } from './Sous-regional/suggestions-plaintes-sous-regional/suggestions-plaintes-sous-regional.component';
import { AgenceFondSousRegionalComponent } from './Sous-regional/agence-fond-sous-regional/agence-fond-sous-regional.component';
import { FondSousRegionalComponent } from './Sous-regional/fond-sous-regional/fond-sous-regional.component';
import { MissionAccueilSousRegionalComponent } from './Sous-regional/Mission/mission-accueil-sous-regional/mission-accueil-sous-regional.component';
import { AssistanceProgrammeSousRegionalComponent } from './Sous-regional/Mission/assistance-programme-sous-regional/assistance-programme-sous-regional.component';
import { PreventionProjetSousRegionalComponent } from './Sous-regional/Mission/prevention-projet-sous-regional/prevention-projet-sous-regional.component';
import { PreventionProgrammeSousRegionalComponent } from './Sous-regional/Mission/prevention-programme-sous-regional/prevention-programme-sous-regional.component';
import { ReinsertionProjetSousRegionalComponent } from './Sous-regional/Mission/reinsertion-projet-sous-regional/reinsertion-projet-sous-regional.component';
import { ReinsertionProgrammeSousRegionalComponent } from './Sous-regional/Mission/reinsertion-programme-sous-regional/reinsertion-programme-sous-regional.component';
import { DonsSousRegionalComponent } from './Sous-regional/dons-sous-regional/dons-sous-regional.component';

//les composants du site comit-veille
import { MembresComitVeilleComponent } from './Comit-veille/membres-comit-veille/membres-comit-veille.component';
import { PartenairesComitVeilleComponent } from './Comit-veille/partenaires-comit-veille/partenaires-comit-veille.component';
import { BlogComitVeilleComponent } from './Comit-veille/blog-comit-veille/blog-comit-veille.component';
import { SuggestionsPlaintesComitVeilleComponent } from './Comit-veille/suggestions-plaintes-comit-veille/suggestions-plaintes-comit-veille.component';
import { AgenceFondComitVeilleComponent } from './Comit-veille/agence-fond-comit-veille/agence-fond-comit-veille.component';
import { AgenceComitVeilleComponent } from './Comit-veille/agence-comit-veille/agence-comit-veille.component';
import { FondComitVeilleComponent } from './Comit-veille/fond-comit-veille/fond-comit-veille.component';
import { DonsComitVeilleComponent } from './Comit-veille/dons-comit-veille/dons-comit-veille.component';

//les composants du site district
import { DistrictAccueilComponent } from './District/district-accueil/district-accueil.component';
import { PresentationDistrictComponent } from './District/presentation-district/presentation-district.component';
import { MembresDistrictComponent } from './District/membres-district/membres-district.component';
import { PartenairesDistrictComponent } from './District/partenaires-district/partenaires-district.component';
import { BlogDistrictComponent } from './District/blog-district/blog-district.component';
import { SuggestionPlainteDistrictComponent } from './District/suggestion-plainte-district/suggestion-plainte-district.component';
import { AgenceFondDistrictComponent } from './District/agence-fond-district/agence-fond-district.component';
import { AgenceDistrictComponent } from './District/agence-district/agence-district.component';
import { FondDistrictComponent } from './District/fond-district/fond-district.component';
import { MissionAccueilDistrictComponent } from './District/Mission/mission-accueil-district/mission-accueil-district.component';
import { AssistanceProjetDistrictComponent } from './District/Mission/assistance-projet-district/assistance-projet-district.component';
import { AssistanceProgrammeDistrictComponent } from './District/Mission/assistance-programme-district/assistance-programme-district.component';
import { PreventionProjetDistrictComponent } from './District/Mission/prevention-projet-district/prevention-projet-district.component';
import { ReinsertionProjetDistrictComponent } from './District/Mission/reinsertion-projet-district/reinsertion-projet-district.component';
import { ReinsertionProgrammeDistrictComponent } from './District/Mission/reinsertion-programme-district/reinsertion-programme-district.component';
import { DonsDistrictComponent } from './District/dons-district/dons-district.component';

//les composants du site section
import { SectionAccueilComponent } from './Section/section-accueil/section-accueil.component';
import { PresentationSectionComponent } from './Section/presentation-section/presentation-section.component';
import { MembresSectionComponent } from './Section/membres-section/membres-section.component';
import { PartenairesSectionComponent } from './Section/partenaires-section/partenaires-section.component';
import { BlogSectionComponent } from './Section/blog-section/blog-section.component';
import { SuggestionsPlaintesSectionComponent } from './Section/suggestions-plaintes-section/suggestions-plaintes-section.component';
import { AgenceFondSectionComponent } from './Section/agence-fond-section/agence-fond-section.component';
import { FondSectionComponent } from './Section/fond-section/fond-section.component';
import { MissionAccueilSectionComponent } from './Section/Mission/mission-accueil-section/mission-accueil-section.component';
import { AssistanceProgrammeSectionComponent } from './Section/Mission/assistance-programme-section/assistance-programme-section.component';
import { AssistanceProjetSectionComponent } from './Section/Mission/assistance-projet-section/assistance-projet-section.component';
import { PreventionProjetSectionComponent } from './Section/Mission/prevention-projet-section/prevention-projet-section.component';
import { PreventionProgrammeSectionComponent } from './Section/Mission/prevention-programme-section/prevention-programme-section.component';
import { ReinsertionProjetSectionComponent } from './Section/Mission/reinsertion-projet-section/reinsertion-projet-section.component';
import { ReinsertionProgrammeSectionComponent } from './Section/Mission/reinsertion-programme-section/reinsertion-programme-section.component';
import { DonsSectionComponent } from './Section/dons-section/dons-section.component';
import { AssistanceProgrammePaysComponent } from './Pays/Mission/assistance-programme-pays/assistance-programme-pays.component';
import { AgenceSectionComponent } from './Section/agence-section/agence-section.component';
import { PreventionProgrammeContinentalComponent } from './Continental/Mission/prevention-programme-continental/prevention-programme-continental.component';
import { PreventionProgrammeDistrictComponent } from './District/Mission/prevention-programme-district/prevention-programme-district.component';


const routes: Routes = [

  // routes site mondial
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
  {path: 'mission-accueil-continental', component: MissionAccueilContinentalComponent },
  {path: 'assistance-projet-continental', component: AssistanceProjetContinentalComponent },
  {path: 'assistance-programme-continental', component: AssistanceContinentalComponent },
  {path: 'prevention-projet-continental', component: PreventionProjetContinentalComponent },
  {path: 'prevention-programme-continental', component: PreventionProgrammeContinentalComponent },
  {path: 'reinsertion-projet-continental', component: ReinsertionProjetContinentalComponent },
  {path: 'reinsertion-programme-continental', component: ReinsertionProgrammeContinentalComponent },
  {path: 'dons-continental', component: DonsContinentalComponent},

          //routes site regional
  {path: 'regional-accueil', component: RegionalAccueilComponent},
  {path: 'presentation-regional', component: PresentationRegionalComponent},
  {path: 'membres-regional', component: MembresRegionalComponent},
  {path: 'partenaires-regional', component: PartenairesRegionalComponent},
  {path: 'blog-regional', component: BlogRegionalComponent},  
  {path: 'suggestions-plaintes-regional', component: SuggestionsPlaintesRegionalComponent},  
  {path: 'agence-fond-regional', component: AgenceFondRegionalComponent},  
  {path: 'agence-regional', component: AgenceRegionalComponent},
  {path: 'fond-regional', component: FondRegionalComponent},
  {path: 'mission-accueil-regional', component: MissionAccueilRegionalComponent },
  {path: 'assistance-projet-regional', component: AssistanceProjetRegionalComponent },
  {path: 'assistance-programme-regional', component: AssistanceProgrammeRegionalComponent },
  {path: 'prevention-projet-regional', component: PreventionProjetRegionalComponent },
  {path: 'prevention-programme-regional', component: PreventionProgrammeRegionalComponent },
  {path: 'reinsertion-projet-regional', component: ReinsertionProjetRegionalComponent },
  {path: 'reinsertion-programme-regional', component: ReinsertionProgrammeRegionalComponent },
  {path: 'dons-regional', component: DonsRegionalComponent },

         //routes site pays
  {path: 'pays-accueil', component: PaysAccueilComponent },
  {path: 'presentation-pays', component: PresentationsPaysComponent },
  {path: 'membres-pays', component: MembresPaysComponent },
  {path: 'partenaires-pays', component: PartenairesPaysComponent },
  {path: 'blog-pays', component: BlogPaysComponent },  
  {path: 'suggestions-plaintes-pays', component: SuggestionsPlaintesPaysComponent },  
  {path: 'agence-fond-pays', component: AgenceFondPaysComponent },  
  {path: 'agence-pays', component: AgencePaysComponent},
  {path: 'fond-pays', component: FondPaysComponent},
  {path: 'mission-accueil-pays', component: MissionPaysComponent},
  {path: 'assistance-projet-pays', component: AssistanceProjetPaysComponent},
  {path: 'assistance-programme-pays', component: AssistanceProgrammePaysComponent},
  {path: 'prevention-projet-pays', component: PreventionProjetPaysComponent},
  {path: 'prevention-programme-pays', component: PreventionProgrammePaysComponent},
  {path: 'reinsertion-projet-pays', component: ReinsertionProjetPaysComponent},
  {path: 'reinsertion-programme-pays', component: ReinsertionProgrammePaysComponent},
  {path: 'dons-pays', component: DonsPaysComponent},

         // routes site sous-regional
  {path: 'sous-regional-accueil', component: SousRegionalAccueilComponent },
  {path: 'presentation-sous-regional', component: PresentationSousRegionalComponent },
  {path: 'membres-sous-regional', component: MembresSousRegionalComponent },
  {path: 'partenaires-sous-regional', component: PartenairesSousRegionalComponent },
  {path: 'blog-sous-regional', component: BlogSousRegionalComponent },  
  {path: 'suggestions-plaintes-sous-regional', component: SuggestionsPlaintesSousRegionalComponent },  
  {path: 'agence-fond-sous-regional', component: AgenceFondSousRegionalComponent },  
  {path: 'agence-sous-regional', component: AgenceSousRegionalComponent},
  {path: 'fond-sous-regional', component: FondSousRegionalComponent},
  {path: 'mission-accueil-sous-regional', component: MissionAccueilSousRegionalComponent},
  {path: 'assistance-projet-sous-regional', component: AssistanceProjetSousRegionalComponent},
  {path: 'assistance-programme-sous-regional', component: AssistanceProgrammeSousRegionalComponent},
  {path: 'prevention-projet-sous-regional', component: PreventionProjetSousRegionalComponent},
  {path: 'prevention-programme-sous-regional', component: PreventionProgrammeSousRegionalComponent},
  {path: 'reinsertion-projet-sous-regional', component: ReinsertionProjetSousRegionalComponent},
  {path: 'reinsertion-programme-sous-regional', component: ReinsertionProgrammeSousRegionalComponent},
  {path: 'dons-sous-regional', component: DonsSousRegionalComponent},

         //routes site district
  {path: 'district-accueil', component: DistrictAccueilComponent },
  {path: 'presentation-district', component: PresentationDistrictComponent },
  {path: 'membres-district', component: MembresDistrictComponent },
  {path: 'partenaires-district', component: PartenairesDistrictComponent },
  {path: 'blog-district', component: BlogDistrictComponent },  
  {path: 'suggestion-plainte-district', component: SuggestionPlainteDistrictComponent },  
  {path: 'agence-fond-district', component: AgenceFondDistrictComponent },  
  {path: 'agence-district', component: AgenceDistrictComponent},
  {path: 'fond-district', component: FondDistrictComponent},
  {path: 'mission-accueil-district', component: MissionAccueilDistrictComponent},
  {path: 'assistance-projet-district', component: AssistanceProjetDistrictComponent},
  {path: 'assistance-programme-district', component: AssistanceProgrammeDistrictComponent},
  {path: 'prevention-projet-district', component: PreventionProjetDistrictComponent},
  {path: 'prevention-programme-district', component: PreventionProgrammeDistrictComponent},
  {path: 'reinsertion-projet-district', component: ReinsertionProjetDistrictComponent},
  {path: 'reinsertion-programme-district', component: ReinsertionProgrammeDistrictComponent},
  {path: 'dons-district', component: DonsDistrictComponent},

         //routes site section//
  {path: 'section-accueil', component: SectionAccueilComponent },
  {path: 'presentation-section', component: PresentationSectionComponent },
  {path: 'membres-section', component: MembresSectionComponent },
  {path: 'partenaires-section', component: PartenairesSectionComponent },
  {path: 'blog-section', component: BlogSectionComponent },  
  {path: 'suggestions-plaintes-section', component: SuggestionsPlaintesSectionComponent },  
  {path: 'agence-fond-section', component: AgenceFondSectionComponent },  
  {path: 'agence-section', component: AgenceSectionComponent},
  {path: 'fond-section', component: FondSectionComponent},
  {path: 'presentation-section', component: PresentationSectionComponent},
  {path: 'mission-accueil-section', component: MissionAccueilSectionComponent},
  {path: 'assistance-projet-section', component: AssistanceProjetSectionComponent},
  {path: 'assistance-programme-section', component: AssistanceProgrammeSectionComponent},
  {path: 'prevention-projet-section', component: PreventionProjetSectionComponent},
  {path: 'prevention-programme-section', component: PreventionProgrammeSectionComponent},
  {path: 'reinsertion-projet-section', component: ReinsertionProjetSectionComponent},
  {path: 'reinsertion-programme-section', component: ReinsertionProgrammeSectionComponent},
  {path: 'dons-section', component: DonsSectionComponent},

         //routes site comit-veille
  {path: 'comit-veille-accueil', component: ComitVeilleAccueilComponent },
  {path: 'presentation-comit-veille', component: PresentationComitVeilleComponent },
  {path: 'membres-comit-veille', component: MembresComitVeilleComponent },
  {path: 'partenaires-comit-veille', component: PartenairesComitVeilleComponent },
  {path: 'blog-comit-veille', component: BlogComitVeilleComponent },  
  {path: 'suggestions-plaintes-comit-veille', component: SuggestionsPlaintesComitVeilleComponent },  
  {path: 'agence-fond-comit-veille', component: AgenceFondComitVeilleComponent },  
  {path: 'agence-comit-veille', component: AgenceComitVeilleComponent},
  {path: 'fond-comit-veille', component: FondComitVeilleComponent},
  {path: 'presentation-comit-veille', component: PresentationComitVeilleComponent},
  {path: 'mission-accueil-comit-veille', component: MissionAccueilComitVeilleComponent},
  {path: 'assistance-projet-comit-veille', component: AssistanceProjetComitVeilleComponent},
  {path: 'assistance-programme-comit-veille', component: AssistanceProgrammeComitVeilleComponent},
  {path: 'prevention-projet-comit-veille', component: PreventionProjetComitVeilleComponent},
  {path: 'prevention-programme-comit-veille', component: PreventionProgrammeComitVeilleComponent},
  {path: 'reinsertion-projet-comit-veille', component: ReinsertionProjetComitVeilleComponent},
  {path: 'reinsertion-programme-comit-veille', component: ReinsertionProgrammeComitVeilleComponent},
  {path: 'dons-comit-veille', component: DonsComitVeilleComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
