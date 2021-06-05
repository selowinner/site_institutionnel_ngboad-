import { Component, OnInit } from '@angular/core';
declare const openMenu: any;
declare const closeMenu: any;

@Component({
  selector: 'app-agence-fond-district',
  templateUrl: './agence-fond-district.component.html',
  styleUrls: ['./agence-fond-district.component.css']
})
export class AgenceFondDistrictComponent implements OnInit {

  constructor() { }
  
  ngOnInit(): void {
  }
  openClickMenu() { openMenu();}

closeClickMenu(){closeMenu();}
}
