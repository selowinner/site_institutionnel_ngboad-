import { Component, OnInit } from '@angular/core';
declare const openMenu: any;
declare const closeMenu: any;

@Component({
  selector: 'app-assistance-programme',
  templateUrl: './assistance-programme.component.html',
  styleUrls: ['./assistance-programme.component.css']
})
export class AssistanceProgrammeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  openClickMenu() { openMenu();}

  closeClickMenu(){closeMenu();}
}
