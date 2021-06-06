import { Component, OnInit } from '@angular/core';
declare const openMenu: any;
declare const closeMenu: any; 

@Component({
  selector: 'app-mission-accueil-section',
  templateUrl: './mission-accueil-section.component.html',
  styleUrls: ['./mission-accueil-section.component.css']
})
export class MissionAccueilSectionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  openClickMenu() { openMenu();}

  closeClickMenu(){closeMenu();} 
}
