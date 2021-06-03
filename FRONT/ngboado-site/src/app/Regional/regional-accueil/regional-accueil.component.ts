import { Component, OnInit } from '@angular/core';
declare const openMenu: any;
declare const closeMenu: any;

@Component({
  selector: 'app-regional-accueil',
  templateUrl: './regional-accueil.component.html',
  styleUrls: ['./regional-accueil.component.css']
})
export class RegionalAccueilComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  openClickMenu() { openMenu();}

  closeClickMenu(){closeMenu();}
}
