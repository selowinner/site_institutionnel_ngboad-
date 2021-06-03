import { Component, OnInit } from '@angular/core';
declare const openMenu: any;
declare const closeMenu: any;

@Component({
  selector: 'app-presentation-regional',
  templateUrl: './presentation-regional.component.html',
  styleUrls: ['./presentation-regional.component.css']
})
export class PresentationRegionalComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

openClickMenu() { openMenu();}
closeClickMenu(){closeMenu();}
}
