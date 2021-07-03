import { Component, OnInit } from '@angular/core';
declare const openMenu: any;
declare const closeMenu: any;
declare const getSuggestionForm: any;
declare const getPlaintesForm: any;
declare const getAutresForm: any;

@Component({
  selector: 'app-suggestions-plaintes-section',
  templateUrl: './suggestions-plaintes-section.component.html',
  styleUrls: ['./suggestions-plaintes-section.component.css']
})
export class SuggestionsPlaintesSectionComponent implements OnInit {

  constructor() { }

  public ngOnInit(): void {
    var suggestionform = document.getElementById('fSuggestions');
    var plaintesform = document.getElementById('fPlaintes');
    var autresform = document.getElementById('fAutres');
    var rates = document.querySelector('input[name="radio-a"]:checked').id;
    if(rates === 'check1'){
        getSuggestionForm(suggestionform, plaintesform, autresform);
    }else if(rates === 'check2'){
        getPlaintesForm(suggestionform, plaintesform, autresform);
    }else{
        getAutresForm(suggestionform, plaintesform, autresform);
    }
  }
  autresForm() {
    var suggestionform = document.getElementById('fSuggestions');
    var plaintesform = document.getElementById('fPlaintes');
    var autresform = document.getElementById('fAutres');
  getAutresForm(suggestionform, plaintesform, autresform);
}

plaintesForm() {
  var suggestionform = document.getElementById('fSuggestions');
  var plaintesform = document.getElementById('fPlaintes');
  var autresform = document.getElementById('fAutres');
  getPlaintesForm(suggestionform, plaintesform, autresform);
}

suggestionForm() {
  var suggestionform = document.getElementById('fSuggestions');
  var plaintesform = document.getElementById('fPlaintes');
  var autresform = document.getElementById('fAutres');
  getSuggestionForm(suggestionform, plaintesform, autresform);
}
  openClickMenu() { openMenu();}

  closeClickMenu(){closeMenu();}
}
