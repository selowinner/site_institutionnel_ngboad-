import { Component, OnInit } from '@angular/core';
declare const openMenu: any;
  declare const closeMenu: any;

@Component({
  selector: 'app-agence-fond-continental',
  templateUrl: './agence-fond-continental.component.html',
  styleUrls: ['./agence-fond-continental.component.css']
})
export class AgenceFondContinentalComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  
  openClickMenu() { openMenu();}
  
  closeClickMenu(){closeMenu();}
}
