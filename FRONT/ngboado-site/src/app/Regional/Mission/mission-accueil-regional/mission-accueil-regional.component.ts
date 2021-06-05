import { Component, OnInit } from '@angular/core';
declare const openMenu: any;
declare const closeMenu: any; 
declare const $: any;

@Component({
  selector: 'app-mission-accueil-regional',
  templateUrl: './mission-accueil-regional.component.html',
  styleUrls: ['./mission-accueil-regional.component.css']
})
export class MissionAccueilRegionalComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  openClickMenu() { openMenu();}

  closeClickMenu(){closeMenu();} 
}
