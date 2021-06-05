import { Component, OnInit } from '@angular/core';
declare const openMenu: any;
declare const closeMenu: any; 

@Component({
  selector: 'app-mission-accueil-comit-veille',
  templateUrl: './mission-accueil-comit-veille.component.html',
  styleUrls: ['./mission-accueil-comit-veille.component.css']
})
export class MissionAccueilComitVeilleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  openClickMenu() { openMenu();}

  closeClickMenu(){closeMenu();} 
}
