import { Component, OnInit } from '@angular/core';
declare const openMenu: any;
declare const closeMenu: any;
declare var $: any;
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
    createSlider('.arrow--prev', '.arrow--next', '.slider__item', '[data-slider]', 'data-position', 'bureaux');
    //Fondateurs
    createSlider('.arrow--prev--fondateurs', '.arrow--next--fondateurs', '.slider__item__fondateurs', '[data-fondateur-slider]', 'data-position-fondateur','fondateurs');
    //Donateurs
    createSlider('.arrow--prev--donateurs', '.arrow--next--donateurs', '.slider__item__donateurs', '[data-donateurs-slider]', 'data-position-donnateurs','donnateurs');
    //Honneurs
    createSlider('.arrow--prev--honneurs', '.arrow--next--honneurs', '.slider__item__honneurs', '[data-honneurs-slider]', 'data-position-honneur','honneurs');
    //Assistants
    createSlider('.arrow--prev--assistants', '.arrow--next--assistants', '.slider__item__assistants', '[data-assistants-slider]', 'data-position-assistant','assistants');
    //Actifs
    createSlider('.arrow--prev--actifs', '.arrow--next--actifs', '.slider__item__actifs', '[data-actifs-slider]', 'data-position-actif','actifs');
  }
  openClickMenu() { openMenu();}
  closeClickMenu(){closeMenu();}
}
