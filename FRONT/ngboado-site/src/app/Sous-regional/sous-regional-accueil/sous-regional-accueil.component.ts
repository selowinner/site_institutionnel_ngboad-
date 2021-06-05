import { Component, OnInit } from '@angular/core';
declare const openMenu: any;
declare const closeMenu: any;

@Component({
  selector: 'app-sous-regional-accueil',
  templateUrl: './sous-regional-accueil.component.html',
  styleUrls: ['./sous-regional-accueil.component.css']
})
export class SousRegionalAccueilComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  openClickMenu() { openMenu();}

  closeClickMenu(){closeMenu();}
}
