import { Component, OnInit } from '@angular/core';
declare const openMenu: any;
declare const closeMenu: any;

@Component({
  selector: 'app-agence-fond-pays',
  templateUrl: './agence-fond-pays.component.html',
  styleUrls: ['./agence-fond-pays.component.css']
})
export class AgenceFondPaysComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  openClickMenu() { openMenu();}

  closeClickMenu(){closeMenu();}
}
