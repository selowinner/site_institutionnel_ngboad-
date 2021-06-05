import { Component, OnInit } from '@angular/core';
declare const openMenu: any;
declare const closeMenu: any;

@Component({
  selector: 'app-agence-fond-comit-veille',
  templateUrl: './agence-fond-comit-veille.component.html',
  styleUrls: ['./agence-fond-comit-veille.component.css']
})
export class AgenceFondComitVeilleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  openClickMenu() { openMenu();}

  closeClickMenu(){closeMenu();}

}
