import { Component, OnInit } from '@angular/core';
declare const openMenu: any;
declare const closeMenu: any;
@Component({
  selector: 'app-agence-fond',
  templateUrl: './agence-fond.component.html',
  styleUrls: ['./agence-fond.component.css']
})
export class AgenceFondComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  openClickMenu() { openMenu();}

closeClickMenu(){closeMenu();}
}
