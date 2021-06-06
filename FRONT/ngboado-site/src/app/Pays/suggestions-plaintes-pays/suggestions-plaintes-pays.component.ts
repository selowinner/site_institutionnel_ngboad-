import { Component, OnInit } from '@angular/core';
declare const openMenu: any;
declare const closeMenu: any;

@Component({
  selector: 'app-suggestions-plaintes-pays',
  templateUrl: './suggestions-plaintes-pays.component.html',
  styleUrls: ['./suggestions-plaintes-pays.component.css']
})
export class SuggestionsPlaintesPaysComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  openClickMenu() { openMenu();}

  closeClickMenu(){closeMenu();}
}
