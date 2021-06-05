import { Component, OnInit } from '@angular/core';
declare const openMenu: any;
declare const closeMenu: any;

@Component({
  selector: 'app-suggestions-plaintes-sous-regional',
  templateUrl: './suggestions-plaintes-sous-regional.component.html',
  styleUrls: ['./suggestions-plaintes-sous-regional.component.css']
})
export class SuggestionsPlaintesSousRegionalComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  openClickMenu() { openMenu();}

  closeClickMenu(){closeMenu();}
}
