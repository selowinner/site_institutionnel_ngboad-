import { Component, OnInit } from '@angular/core';
declare const openMenu: any;
declare const closeMenu: any;

@Component({
  selector: 'app-suggestion-plainte-district',
  templateUrl: './suggestion-plainte-district.component.html',
  styleUrls: ['./suggestion-plainte-district.component.css']
})
export class SuggestionPlainteDistrictComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  openClickMenu() { openMenu();}

  closeClickMenu(){closeMenu();}


}
