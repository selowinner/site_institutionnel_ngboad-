import { Component, OnInit } from '@angular/core';
declare const openMenu: any;
declare const closeMenu: any;

@Component({
  selector: 'app-membres',
  templateUrl: './membres.component.html',
  styleUrls: ['./membres.component.css']
})
export class MembresComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
  }
  
  openClickMenu() { openMenu();}

closeClickMenu(){closeMenu();}
}
