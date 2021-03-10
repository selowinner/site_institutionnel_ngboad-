import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PresentationComponent } from './presentation/presentation.component';
import { MembresComponent } from './membres/membres.component';
import { PartenairesComponent } from './partenaires/partenaires.component';

const appRoutes: Routes = [
  {path: '',
  component: HomeComponent},

  {path: 'presentation',
  component: PresentationComponent},

  {path: 'membres',
  component: MembresComponent
  },
];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PresentationComponent,
    MembresComponent,
    PartenairesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
