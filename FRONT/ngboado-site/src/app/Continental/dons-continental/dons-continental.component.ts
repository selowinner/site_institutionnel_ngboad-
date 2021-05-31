import { Component, OnInit } from '@angular/core';
declare const openMenu: any;
declare const closeMenu: any; 

@Component({
  selector: 'app-dons-continental',
  templateUrl: './dons-continental.component.html',
  styleUrls: ['./dons-continental.component.css']
})
export class DonsContinentalComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  openClickMenu() {openMenu();}
  closeClickMenu() {closeMenu();}
}
