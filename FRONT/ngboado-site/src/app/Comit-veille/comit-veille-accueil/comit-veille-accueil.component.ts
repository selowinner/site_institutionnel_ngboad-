import { Component, OnInit } from '@angular/core';
declare const openMenu: any;
declare const closeMenu: any;

@Component({
  selector: 'app-comit-veille-accueil',
  templateUrl: './comit-veille-accueil.component.html',
  styleUrls: ['./comit-veille-accueil.component.css']
})
export class ComitVeilleAccueilComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  openClickMenu() { openMenu();}
 
  closeClickMenu(){closeMenu();}
}
