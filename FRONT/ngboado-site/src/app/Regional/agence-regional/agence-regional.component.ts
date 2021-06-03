import { Component, OnInit } from '@angular/core';
declare const openMenu: any;
declare const closeMenu: any;

@Component({
  selector: 'app-agence-regional',
  templateUrl: './agence-regional.component.html',
  styleUrls: ['./agence-regional.component.css']
})
export class AgenceRegionalComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  openClickMenu() { openMenu();}

  closeClickMenu(){closeMenu();}
}
