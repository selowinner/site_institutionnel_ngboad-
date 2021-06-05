import { Component, OnInit } from '@angular/core';
declare const openMenu: any;
declare const closeMenu: any;
declare const $: any; 

@Component({
  selector: 'app-dons-regional',
  templateUrl: './dons-regional.component.html',
  styleUrls: ['./dons-regional.component.css']
})
export class DonsRegionalComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

openClickMenu() { openMenu();}

closeClickMenu(){closeMenu();}
}
