import { Component, OnInit } from '@angular/core';
declare const openMenu: any;
declare const closeMenu: any;

@Component({
  selector: 'app-assistance-projet',
  templateUrl: './assistance-projet.component.html',
  styleUrls: ['./assistance-projet.component.css']
})
export class AssistanceProjetComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  openClickMenu() { openMenu();}

  closeClickMenu(){closeMenu();}

}
