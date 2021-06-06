import { Component, OnInit } from '@angular/core';
declare const openMenu: any;
declare const closeMenu: any; 

@Component({
  selector: 'app-mission-pays',
  templateUrl: './mission-pays.component.html',
  styleUrls: ['./mission-pays.component.css']
})
export class MissionPaysComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  openClickMenu() { openMenu();}

  closeClickMenu(){closeMenu();} 
}
