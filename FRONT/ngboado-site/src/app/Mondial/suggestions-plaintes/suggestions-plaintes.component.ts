import { Component, OnInit } from '@angular/core';
declare const openMenu: any;
declare const closeMenu: any;
// declare var $: any;


@Component({
  selector: 'app-suggestions-plaintes',
  templateUrl: './suggestions-plaintes.component.html',
  styleUrls: ['./suggestions-plaintes.component.css']
})
export class SuggestionsPlaintesComponent implements OnInit {

  constructor() { }

   ngOnInit(): void {
    
        }

  openClickMenu() { openMenu();}

  closeClickMenu(){closeMenu();}

}
