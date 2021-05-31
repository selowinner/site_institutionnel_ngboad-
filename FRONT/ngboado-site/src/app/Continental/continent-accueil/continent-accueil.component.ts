import { Component, OnInit } from '@angular/core';
declare const openMenu: any;
declare const closeMenu: any;
@Component({
  selector: 'app-continent-accueil',
  templateUrl: './continent-accueil.component.html',
  styleUrls: ['./continent-accueil.component.css']
})
export class ContinentAccueilComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  openClickMenu() { openMenu();}
 
  closeClickMenu(){closeMenu();}
}
