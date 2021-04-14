import { Component, OnInit } from '@angular/core';
declare const openMenu: any;
declare const closeMenu: any;

@Component({
  selector: 'app-reinsertion-projet',
  templateUrl: './reinsertion-projet.component.html',
  styleUrls: ['./reinsertion-projet.component.css']
})
export class ReinsertionProjetComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  openClickMenu() { openMenu();}

  closeClickMenu(){closeMenu();}
}
