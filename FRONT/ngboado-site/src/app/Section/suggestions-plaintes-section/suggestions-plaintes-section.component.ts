import { Component, OnInit } from '@angular/core';
declare const openMenu: any;
declare const closeMenu: any;

@Component({
  selector: 'app-suggestions-plaintes-section',
  templateUrl: './suggestions-plaintes-section.component.html',
  styleUrls: ['./suggestions-plaintes-section.component.css']
})
export class SuggestionsPlaintesSectionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  openClickMenu() { openMenu();}

  closeClickMenu(){closeMenu();}
}
