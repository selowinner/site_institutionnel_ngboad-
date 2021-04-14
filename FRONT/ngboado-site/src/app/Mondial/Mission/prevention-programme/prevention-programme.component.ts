import { Component, OnInit } from '@angular/core';
declare const openMenu: any;
declare const closeMenu: any;

@Component({
  selector: 'app-prevention-programme',
  templateUrl: './prevention-programme.component.html',
  styleUrls: ['./prevention-programme.component.css']
})
export class PreventionProgrammeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  openClickMenu() { openMenu();}

  closeClickMenu(){closeMenu();}
  
}
