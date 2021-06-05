import { Component, OnInit } from '@angular/core';
declare const openMenu: any;
declare const closeMenu: any;

@Component({
  selector: 'app-agence-sous-regional',
  templateUrl: './agence-sous-regional.component.html',
  styleUrls: ['./agence-sous-regional.component.css']
})
export class AgenceSousRegionalComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  openClickMenu() { openMenu();}

  closeClickMenu(){closeMenu();}
}
