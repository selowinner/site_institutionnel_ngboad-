import { Component, OnInit } from '@angular/core';
declare const openMenu: any;
declare const closeMenu: any;
declare const $: any;

@Component({
  selector: 'app-assistance-projet-continental',
  templateUrl: './assistance-projet-continental.component.html',
  styleUrls: ['./assistance-projet-continental.component.css']
})
export class AssistanceProjetContinentalComponent implements OnInit {

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