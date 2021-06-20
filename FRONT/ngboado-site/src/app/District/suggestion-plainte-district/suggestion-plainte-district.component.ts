import { Component, OnInit } from '@angular/core';
declare const openMenu: any;
declare const closeMenu: any;
declare const getSuggestionForm: any;
declare const getPlaintesForm: any;
declare const getAutresForm: any;

@Component({
  selector: 'app-suggestion-plainte-district',
  templateUrl: './suggestion-plainte-district.component.html',
  styleUrls: ['./suggestion-plainte-district.component.css']
})
export class SuggestionPlainteDistrictComponent implements OnInit {

  constructor() { }

  public ngOnInit(): void {
    var suggestionform = document.getElementById('fSuggestions');
    var plaintesform = document.getElementById('fPlaintes');
    var autresform = document.getElementById('fAutres');
    var rates = document.querySelector('input[name="radio-a"]:checked').id;
    console.log(rates);
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
