import { Component, OnInit } from '@angular/core';
declare const openMenu: any;
declare const closeMenu: any;
declare const $: any;

@Component({
  selector: 'app-agence-continental',
  templateUrl: './agence-continental.component.html',
  styleUrls: ['./agence-continental.component.css']
})
export class AgenceContinentalComponent implements OnInit {

  constructor() { }

  public ngOnInit(): void {
    $('#autoWidth').lightSlider({
      autoWidth: true,
      loop: true,
      onSliderLoad: function() {
        $('#autoWidth').removeClass('cS-hidden');
      }
    });
  }
  
openClickMenu() { openMenu();}

closeClickMenu(){closeMenu();}
}
