import { Component, OnInit } from '@angular/core';
declare const openMenu: any;
declare const closeMenu: any;

@Component({
  selector: 'app-agence-continental',
  templateUrl: './agence-continental.component.html',
  styleUrls: ['./agence-continental.component.css']
})
export class AgenceContinentalComponent implements OnInit {

  constructor() { }

   ngOnInit(): void {
   
  }
  
openClickMenu() { openMenu();}

closeClickMenu(){closeMenu();}
}
