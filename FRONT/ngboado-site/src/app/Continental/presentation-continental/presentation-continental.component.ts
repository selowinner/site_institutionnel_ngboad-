import { Component, OnInit } from '@angular/core';
declare const openMenu: any;
declare const closeMenu: any;
declare const $: any;  
@Component({
  selector: 'app-presentation-continental',
  templateUrl: './presentation-continental.component.html',
  styleUrls: ['./presentation-continental.component.css']
})
export class PresentationContinentalComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

openClickMenu() { openMenu();}

closeClickMenu(){closeMenu();}
}
