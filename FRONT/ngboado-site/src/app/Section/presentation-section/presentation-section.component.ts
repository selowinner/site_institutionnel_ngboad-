import { Component, OnInit } from '@angular/core';
declare const openMenu: any;
declare const closeMenu: any;

@Component({
  selector: 'app-presentation-section',
  templateUrl: './presentation-section.component.html',
  styleUrls: ['./presentation-section.component.css']
})
export class PresentationSectionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  openClickMenu() { openMenu();}
  closeClickMenu(){closeMenu();}
}
