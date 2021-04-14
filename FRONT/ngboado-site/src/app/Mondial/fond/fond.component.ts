import { Component, OnInit } from '@angular/core';
declare const openMenu: any;
declare const closeMenu: any;
@Component({
  selector: 'app-fond',
  templateUrl: './fond.component.html',
  styleUrls: ['./fond.component.css']
})
export class FondComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  openClickMenu() { openMenu();}

closeClickMenu(){closeMenu();}
}
