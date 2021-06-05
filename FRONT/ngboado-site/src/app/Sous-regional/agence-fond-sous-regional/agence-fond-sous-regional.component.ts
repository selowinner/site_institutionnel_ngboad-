import { Component, OnInit } from '@angular/core';
declare const openMenu: any;
declare const closeMenu: any;

@Component({
  selector: 'app-agence-fond-sous-regional',
  templateUrl: './agence-fond-sous-regional.component.html',
  styleUrls: ['./agence-fond-sous-regional.component.css']
})
export class AgenceFondSousRegionalComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  openClickMenu() { openMenu();}
  
  closeClickMenu(){closeMenu();}

}
