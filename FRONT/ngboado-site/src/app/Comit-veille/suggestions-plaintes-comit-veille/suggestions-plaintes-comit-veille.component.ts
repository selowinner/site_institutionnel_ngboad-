import { Component, OnInit } from '@angular/core';
declare const openMenu: any;
declare const closeMenu: any;

@Component({
  selector: 'app-suggestions-plaintes-comit-veille',
  templateUrl: './suggestions-plaintes-comit-veille.component.html',
  styleUrls: ['./suggestions-plaintes-comit-veille.component.css']
})
export class SuggestionsPlaintesComitVeilleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  openClickMenu() { openMenu();}

  closeClickMenu(){closeMenu();}
}
