import { Component, OnInit } from '@angular/core';
declare const openMenu: any;
declare const closeMenu: any; 
declare const $: any;

@Component({
  selector: 'app-mission-accueil-sous-regional',
  templateUrl: './mission-accueil-sous-regional.component.html',
  styleUrls: ['./mission-accueil-sous-regional.component.css']
})
export class MissionAccueilSousRegionalComponent implements OnInit {

  constructor() { }
  
  ngOnInit(): void {
  }

  openClickMenu() { openMenu();}

  closeClickMenu(){closeMenu();} 
}