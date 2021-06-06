import { Component, OnInit } from '@angular/core';
declare const openMenu: any;
declare const closeMenu: any;

@Component({
  selector: 'app-pays-accueil',
  templateUrl: './pays-accueil.component.html',
  styleUrls: ['./pays-accueil.component.css']
})
export class PaysAccueilComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  openClickMenu() { openMenu();}
 
  closeClickMenu(){closeMenu();}

}
