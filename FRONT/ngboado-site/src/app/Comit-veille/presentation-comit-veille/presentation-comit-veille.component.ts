import { Component, OnInit } from '@angular/core';
declare const openMenu: any;
declare const closeMenu: any;

@Component({
  selector: 'app-presentation-comit-veille',
  templateUrl: './presentation-comit-veille.component.html',
  styleUrls: ['./presentation-comit-veille.component.css']
})
export class PresentationComitVeilleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  openClickMenu() { openMenu();}
  closeClickMenu(){closeMenu();}

}
