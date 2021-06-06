import { Component, OnInit } from '@angular/core';
declare const openMenu: any;
declare const closeMenu: any;

@Component({
  selector: 'app-section-accueil',
  templateUrl: './section-accueil.component.html',
  styleUrls: ['./section-accueil.component.css']
})
export class SectionAccueilComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  openClickMenu() { openMenu();}
 
  closeClickMenu(){closeMenu();}

}
