import { Component, OnInit } from '@angular/core';
declare const openMenu: any;
declare const closeMenu: any;

@Component({
  selector: 'app-prevention-projet',
  templateUrl: './prevention-projet.component.html',
  styleUrls: ['./prevention-projet.component.css']
})
export class PreventionProjetComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  openClickMenu() { openMenu();}

  closeClickMenu(){closeMenu();}

}
