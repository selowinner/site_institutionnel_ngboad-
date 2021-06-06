import { Component, OnInit } from '@angular/core';
declare const openMenu: any;
declare const closeMenu: any;

@Component({
  selector: 'app-mission-accueil-district',
  templateUrl: './mission-accueil-district.component.html',
  styleUrls: ['./mission-accueil-district.component.css']
})
export class MissionAccueilDistrictComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  openClickMenu() { openMenu();}

  closeClickMenu(){closeMenu();} 
}

