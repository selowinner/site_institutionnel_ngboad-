import { Component, OnInit } from '@angular/core';
declare const openMenu: any;
declare const closeMenu: any;
@Component({
  selector: 'app-dons',
  templateUrl: './dons.component.html',
  styleUrls: ['./dons.component.css']
})
export class DonsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  openClickMenu() {openMenu();}
  closeClickMenu() {closeMenu();}
}
