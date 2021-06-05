import { Component, OnInit } from '@angular/core';
declare const openMenu: any;
declare const closeMenu: any;

@Component({
  selector: 'app-presentation-sous-regional',
  templateUrl: './presentation-sous-regional.component.html',
  styleUrls: ['./presentation-sous-regional.component.css']
})
export class PresentationSousRegionalComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  openClickMenu() { openMenu();}
  closeClickMenu(){closeMenu();}
}
