import { Component, OnInit } from '@angular/core';
declare const openMenu: any;
declare const closeMenu: any;

@Component({
  selector: 'app-suggestion-plainte-continental',
  templateUrl: './suggestion-plainte-continental.component.html',
  styleUrls: ['./suggestion-plainte-continental.component.css']
})
export class SuggestionPlainteContinentalComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  openClickMenu() { openMenu();}

  closeClickMenu(){closeMenu();}
}
