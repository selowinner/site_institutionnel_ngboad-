import { Component, OnInit } from '@angular/core';
declare const openMenu: any;
declare const closeMenu: any;
declare const $: any; 
@Component({
  selector: 'app-dons-sous-regional',
  templateUrl: './dons-sous-regional.component.html',
  styleUrls: ['./dons-sous-regional.component.css']
})
export class DonsSousRegionalComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


openClickMenu() { openMenu();}

closeClickMenu(){closeMenu();}
}
