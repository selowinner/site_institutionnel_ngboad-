import { Component, OnInit } from '@angular/core';
declare const openMenu: any;
declare const closeMenu: any; 
declare const $: any;

@Component({
  selector: 'app-mission-accueil',
  templateUrl: './mission-accueil.component.html',
  styleUrls: ['./mission-accueil.component.css']
})
export class MissionAccueilComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {}

  openClickMenu() { openMenu();}

  closeClickMenu(){closeMenu();}

}
