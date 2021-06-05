import { Component, OnInit } from '@angular/core';
declare const openMenu: any;
declare const closeMenu: any;

@Component({
  selector: 'app-dons-district',
  templateUrl: './dons-district.component.html',
  styleUrls: ['./dons-district.component.css']
})
export class DonsDistrictComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  openClickMenu() {openMenu();}
  closeClickMenu() {closeMenu();}

}
