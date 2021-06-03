import { Component, OnInit } from '@angular/core';
declare const openMenu: any;
declare const closeMenu: any;

@Component({
  selector: 'app-agence-fond-regional',
  templateUrl: './agence-fond-regional.component.html',
  styleUrls: ['./agence-fond-regional.component.css']
})
export class AgenceFondRegionalComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  openClickMenu() { openMenu();}
  
  closeClickMenu(){closeMenu();}
}
