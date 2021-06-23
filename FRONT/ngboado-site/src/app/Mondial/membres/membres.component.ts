import { Component, OnInit } from '@angular/core';
declare const openMenu: any;
declare const closeMenu: any;
declare const createSlider: any;

@Component({
  selector: 'app-membres',
  templateUrl: './membres.component.html',
  styleUrls: ['./membres.component.css']
})
export class MembresComponent implements OnInit {

  constructor() { }

  public ngOnInit(): void {
    //Bureaux
    createSlider(
      '.arrow--prev', 
      '.arrow--next', 
      '.slider__item', 
      '[data-slider]', 
      'data-position'
    );
    //Fondateurs
    createSlider(
      '.arrow--prev--fondateurs', 
      '.arrow--next--fondateurs', 
      '.slider__item__fondateurs', 
      '[data-fondateur-slider]', 
      'data-position-fondateur'
    );
    //Donateurs
    createSlider(
      '.arrow--prev--donateurs', 
      '.arrow--next--donateurs', 
      '.slider__item__donateurs', 
      '[data-donateurs-slider]', 
      'data-position-donnateurs'
    );
    //Honneurs
    createSlider(
      '.arrow--prev--honneurs', 
      '.arrow--next--honneurs', 
      '.slider__item__honneurs', 
      '[data-honneurs-slider]', 
      'data-position-honneur'
    );
    //Assistants
    createSlider(
      '.arrow--prev--assistants', 
      '.arrow--next--assistants', 
      '.slider__item__assistants', 
      '[data-assistants-slider]', 
      'data-position-assistant'
    );
    //Actifs
    createSlider(
      '.arrow--prev--actifs', 
      '.arrow--next--actifs', 
      '.slider__item__actifs', 
      '[data-actifs-slider]', 
      'data-position-actif'
    );
  }
  openClickMenu() { openMenu();}
  closeClickMenu(){closeMenu();}
}
