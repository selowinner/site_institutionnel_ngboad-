import { Component, OnInit } from '@angular/core';
declare const openMenu: any;
declare const closeMenu: any;

@Component({
  selector: 'app-district-accueil',
  templateUrl: './district-accueil.component.html',
  styleUrls: ['./district-accueil.component.css']
})
export class DistrictAccueilComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  openClickMenu() { openMenu();}
 
  closeClickMenu(){closeMenu();}

}
