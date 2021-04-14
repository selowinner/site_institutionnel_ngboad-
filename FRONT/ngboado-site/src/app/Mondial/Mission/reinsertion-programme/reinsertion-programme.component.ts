import { Component, OnInit } from '@angular/core';
declare const openMenu: any;
declare const closeMenu: any;

@Component({
  selector: 'app-reinsertion-programme',
  templateUrl: './reinsertion-programme.component.html',
  styleUrls: ['./reinsertion-programme.component.css']
})
export class ReinsertionProgrammeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  openClickMenu() { openMenu();}

  closeClickMenu(){closeMenu();}

}
