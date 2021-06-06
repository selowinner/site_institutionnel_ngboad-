import { Component, OnInit } from '@angular/core';
declare const openMenu: any;
declare const closeMenu: any;

@Component({
  selector: 'app-presentations-pays',
  templateUrl: './presentations-pays.component.html',
  styleUrls: ['./presentations-pays.component.css']
})
export class PresentationsPaysComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  openClickMenu() { openMenu();}
  closeClickMenu(){closeMenu();}
}
