import { Component, OnInit } from '@angular/core';
declare const openMenu: any;
declare const closeMenu: any;
// declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  
  openClickMenu() { openMenu();}
 
  closeClickMenu(){closeMenu();}

}
