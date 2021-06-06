import { Component, OnInit } from '@angular/core';
declare const openMenu: any;
declare const closeMenu: any;

@Component({
  selector: 'app-agence-fond-section',
  templateUrl: './agence-fond-section.component.html',
  styleUrls: ['./agence-fond-section.component.css']
})
export class AgenceFondSectionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  openClickMenu() { openMenu();}

  closeClickMenu(){closeMenu();}
}
