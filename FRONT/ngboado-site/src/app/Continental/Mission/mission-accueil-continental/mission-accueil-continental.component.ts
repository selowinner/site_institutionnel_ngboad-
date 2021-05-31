import { Component, OnInit } from '@angular/core';
declare const openMenu: any;
declare const closeMenu: any; 
declare const $: any;

@Component({
  selector: 'app-mission-accueil-continental',
  templateUrl: './mission-accueil-continental.component.html',
  styleUrls: ['./mission-accueil-continental.component.css']
})
export class MissionAccueilContinentalComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  openClickMenu() { openMenu();}

  closeClickMenu(){closeMenu();} 
}
