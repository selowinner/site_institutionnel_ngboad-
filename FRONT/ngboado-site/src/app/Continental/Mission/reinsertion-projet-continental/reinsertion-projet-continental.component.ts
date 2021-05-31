import { Component, OnInit } from '@angular/core';
declare const openMenu: any;
declare const closeMenu: any;
declare const $: any;

@Component({
  selector: 'app-reinsertion-projet-continental',
  templateUrl: './reinsertion-projet-continental.component.html',
  styleUrls: ['./reinsertion-projet-continental.component.css']
})
export class ReinsertionProjetContinentalComponent implements OnInit {

  constructor() { }

  public ngOnInit(): void {
    $('#autoWidth').lightSlider({
      autoWidth: true,
      loop: true,
      onSliderLoad: function() {
        $('#autoWidth').removeClass('cS-hidden');
      }
    });

    $('#AutoWidth').lightSlider({
      autoWidth: true,
      loop: true,
      onSliderLoad: function() {
        $('#AutoWidth').removeClass('cS-hidden');
      }
    });
  }
  
  openClickMenu() { openMenu();}

  closeClickMenu(){closeMenu();}
}

